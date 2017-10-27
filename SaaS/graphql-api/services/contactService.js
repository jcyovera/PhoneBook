'use strict';

exports.getAllContacts = function (req, res) {
    var Client = require('node-rest-client').Client;
    var serviceConstants = require('./serviceConstants');
    var contactMapper = require('../mappers/contactMapper');

    var client = new Client();

    var url = `${serviceConstants.FIRESTORE_BASE_URL}projects/phonebook-207fa/databases/(default)/documents/contacts`;

    function getContactAddresses(contact) {
        var contactUrl = `${serviceConstants.FIRESTORE_BASE_URL}${contact.name}/addresses`;

        client.get(contactUrl, function(data, response) {
            return data.documents;
        });
    }

    client.get(url, function(data, response) {
        var contactNames = data.documents.map(contact => {
            return {
                name: contact.name
            }
        });
        var contacts = contactMapper.mapContacts(data);        

        res.json(contacts);
    });
};