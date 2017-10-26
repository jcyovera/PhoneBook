/*
 *
 * PhoneBook actions
 *
 */

import {
  DEFAULT_ACTION, 
  LOAD_CONTACTS,
  LOAD_CONTACTS_SUCCESS,
  LOAD_CONTACTS_ERROR,
  UPDATE_FILTERED_CONTACT_LIST,
  SHOW_MODAL
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loadContacts() {
  return {
    type: LOAD_CONTACTS,
  };
}
export function contactsLoaded(contacts) {
  return {
    type: LOAD_CONTACTS_SUCCESS,
    contacts
  };
}
export function contactLoadingError(error) {
  return {
    type: LOAD_CONTACTS_ERROR,
    error,
  };
}
export function filteredContactUpdateList(contacts) {
  return {
    type: UPDATE_FILTERED_CONTACT_LIST,
    contacts,
  };
}
export function showModal() {
  return {
    type: SHOW_MODAL,
  };
}

