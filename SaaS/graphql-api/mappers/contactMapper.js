'use strict';

exports.mapContacts = function (source) {
    return source.documents.map(item => {
        return {
            email: (item.fields.email && item.fields.email.stringValue) || '',
            firstName: (item.fields.firstName && item.fields.firstName.stringValue) || '',
            lastName: (item.fields.lastName && item.fields.lastName.stringValue) || '',
            type: (item.fields.type && item.fields.type.stringValue) || ''
        }
    });
}