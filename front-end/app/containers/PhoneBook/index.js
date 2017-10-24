/**
 *
 * PhoneBook
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContacts from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadContacts } from '../App/actions';

import ContactCardList from 'components/ContactCardList';

export class PhoneBook extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  //init
  componentDidMount() {
    dispatch(loadContacts());
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>PhoneBook</title>
          <meta name="description" content="Description of PhoneBook" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <ContactCardList items={contactList}/>
      </div>
    );
  }
}

PhoneBook.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
// const contactList=[{
//   id:1,
//   firstName:'My name',
//   lastName:'my last',
//   email:'my@email.com'
// },{
//   id:2,
//   firstName:'My name2',
//   lastName:'my last2',
//   email:'my2@email.com'
// }];
const mapStateToProps = createStructuredSelector({
  contacts: makeSelectContacts(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'phoneBook', reducer });
const withSaga = injectSaga({ key: 'phoneBook', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PhoneBook);
