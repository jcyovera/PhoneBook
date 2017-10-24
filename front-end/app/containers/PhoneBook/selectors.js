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

const makeSelectPhoneBook = () => createSelector(
  selectPhoneBookDomain,
  (substate) => substate.toJS()
);

export default makeSelectPhoneBook;
export {
  selectPhoneBookDomain,
};
