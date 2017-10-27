'use strict';

var { makeExecutableSchema } = require('graphql-tools');
var contactsDb = require('./contacts');

const resolvers = {
    Contact: {
        addresses(contact) {
            return contactsDb.getContactAddresses(contact.id);
        }
    },
    Query: {
        contacts() {
            return contactsDb.getContacts();
        }
    }
};

const schema = `
    type Address {
        id: String
        name: String
    }
    type Contact {
        id: String
        firstName: String
        lastName: String
        addresses: [Address]
        email:String
    }
    type Query {
        contacts: [Contact]
    }
`;

exports.makeSchema = () => {
    return makeExecutableSchema({ typeDefs: schema, resolvers });
}