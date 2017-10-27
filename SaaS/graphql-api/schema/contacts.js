'use strict';

const admin = require('firebase-admin');
const Q = require('q');

var serviceAccount = require('../keys/PhoneBook.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

exports.getContacts = () => {
    return getCollection('contacts', db);
}

exports.getContactAddresses = (contactId) => {
    var ref = db.collection('contacts').doc(contactId);

    return getCollection('addresses', ref);
}

exports.getContactSocialNetworks = (contactId) => {
    var ref = db.collection('contacts').doc(contactId);

    return getCollection('socialNetworks', ref);
}

exports.getContactPhoneNumbers = (contactId) => {
    var ref = db.collection('contacts').doc(contactId);

    return getCollection('phoneNumbers', ref);
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