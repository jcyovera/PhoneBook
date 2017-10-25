import { createSelector } from 'reselect';

/**
 * Direct selector to the phoneBook state domain
 */
const selectPhoneBookDomain = (state) => state.get('phoneBook');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PhoneBook
 */

const makeSelectContacts = () => createSelector(
  selectPhoneBookDomain,
  (substate) => substate.get('contacts')
);

const makeSelectFilteredContacts = () => createSelector(
  selectPhoneBookDomain,
  (substate) => substate.get('filteredContacts')
);

export default makeSelectContacts;
export {
  selectPhoneBookDomain,
  makeSelectContacts,
  makeSelectFilteredContacts
};
