import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CONTACTS} from './constants'
import { contactsLoaded, contactLoadingError } from './actions';

import request from 'utils/request';

export function* getContacts() {
  const requestURL = `http://localhost:4000/graphql?query={contacts{firstName addresses{id name}lastName id email}}`;

  try {
    const contacts = yield call(request, requestURL);
    console.log(contacts);
    yield put(contactsLoaded(contacts));
  } catch (err) {
    yield put(contactLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* contactsData() {
  yield takeLatest(LOAD_CONTACTS, getContacts);
}
