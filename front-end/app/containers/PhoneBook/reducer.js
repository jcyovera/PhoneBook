/*
 *
 * PhoneBook reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_CONTACTS,
  LOAD_CONTACTS_SUCCESS,
  LOAD_CONTACTS_ERROR,
  UPDATE_FILTERED_CONTACT_LIST,
  SHOW_MODAL
} from './constants';

const initialState = fromJS({});

function phoneBookReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_CONTACTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('contacts', [])
        .set('filteredContacts', []);
    case LOAD_CONTACTS_SUCCESS:
      return state
        .set('contacts', action.contacts)
        .set('filteredContacts', action.contacts)
        .set('loading', false)
    case LOAD_CONTACTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case UPDATE_FILTERED_CONTACT_LIST:
      return state
        .set('filteredContacts', action.contacts)
    case SHOW_MODAL:
      return state
        .set('isModalVisible', true)
        
    default:
      return state;
  }
}

export default phoneBookReducer;
