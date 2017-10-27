'use strict';

module.exports = function (app) {
    var contactService = require('./services/contactService');
    var contacts = require('./database/contacts');

    app.route('/rest/contacts')
        .get(contactService.getAllContacts);

    app.route('/fb/contacts')
        .get(contacts.getContacts)
        .post(contacts.createContact);

    app.route('/fb/contacts/:contactId')
        .get(contacts.getContact);

    app.route('/fb/contacts/:contactId/addresses')
        .get(contacts.getContactAddresses);

    app.route('/fb/contacts/:contactId/phonenumbers')
        .get(contacts.getContactPhoneNumbers);

    app.route('/fb/contacts/:contactId/socialnetworks')
        .get(contacts.getContactSocialNetworks);
}