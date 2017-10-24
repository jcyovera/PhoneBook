import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CONTACTS } from 'containers/App/constants';
import { contactsLoaded, contactLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getContacts() {
  const requestURL = `http://localhost:3003/contacts`;

  try {
    const contacts = yield call(request, requestURL);
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
