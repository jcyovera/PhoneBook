'use strict';

const admin = require('firebase-admin');
const Q = require('q');

var serviceAccount = require('../keys/PhoneBook.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

exports.getContacts = (request, response) => {
    getCollection('contacts', db).then(collection => {
        response.json(collection);
    });
}

exports.getContact = (request, response) => {
    db.collection('contacts').doc(request.params.contactId).get().then(document => {
        if (!document.exists) {
            response.status(404).send('Contact not found.');
        } else {
            response.json(document.data());
        }
    }).catch(error => {
        response.status(500).send('Internal server error: ' + error);
    });
}

exports.getContactAddresses = (request, response) => {
    let contactRef = db.collection('contacts').doc(request.params.contactId);
    getCollection('addresses', contactRef).then(collection => {
        response.json(collection);
    });
}

exports.getContactPhoneNumbers = (request, response) => {
    let contactRef = db.collection('contacts').doc(request.params.contactId);
    getCollection('phoneNumbers', contactRef).then(collection => {
        response.json(collection);
    });
}

exports.getContactSocialNetworks = (request, response) => {
    let contactRef = db.collection('contacts').doc(request.params.contactId);
    getCollection('socialNetworks', contactRef).then(collection => {
        response.json(collection);
    });
}

exports.createContact = (request, response) => {
    db.collection('contacts').add(request.body).then(document => {
        response.json({ id: document.id });
    }).catch(error => {
        response.status(500).send(error);
    });
}

let getCollection = (collectionName, source) => {
    let deferred = Q.defer();

    source.collection(collectionName).get().then(snapshot => {
        let data = [];
        snapshot.forEach(doc => {
            let item = { id: doc.id };
            data.push(Object.assign(item, doc.data()));
        });
        deferred.resolve(data);
    }).catch(error => {
        console.log('Error getting data', error);
        deferred.reject(error);
    });

    return deferred.promise;
}