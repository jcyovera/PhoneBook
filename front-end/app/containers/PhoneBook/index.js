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
import { makeSelectFilteredContacts, makeSelectContacts } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadContacts, filteredContactUpdateList } from './actions';

import ContactCardList from 'components/ContactCardList';
import MainHeader from 'components/MainHeader';

export class PhoneBook extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  //init
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    let card = null;

    if (this.props.filteredContacts && this.props.filteredContacts.length) {
      card = <ContactCardList items={this.props.filteredContacts} />;
    } else {
      card = (<div>No contacts matched the provided filter.</div>)
    }
    return (
      <div>
        <Helmet>
          <title>PhoneBook</title>
          <meta name="description" content="Description of PhoneBook" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        {
          this.props.contacts ? (<MainHeader numberContacts={this.props.contacts.length}
            onSearchChange={this.onSearchChange.bind(this)} />) : (<div></div>)
        }
        {card}
      </div>
    );
  }
  onSearchChange(event) {
    let searchValue = event.target.value;
    let contacts = this.props.contacts;

    let filteredList = contacts.filter((contact) => {
      let value = searchValue.toLowerCase();

      return contact.firstName.toLowerCase().indexOf(value) !== -1 ||
        contact.lastName.toLowerCase().indexOf(value) !== -1 ||
        contact.email.toLowerCase().indexOf(value) !== -1;
    });

    this.props.filter(filteredList);
  }
}

PhoneBook.propTypes = {
  contacts: PropTypes.array,
  filteredContacts: PropTypes.array,
  dispatch: PropTypes.func,
  onSearchChange: PropTypes.func
};
const mapStateToProps = createStructuredSelector({
  contacts: makeSelectContacts(),
  filteredContacts: makeSelectFilteredContacts()
});

function mapDispatchToProps(dispatch) {
  return {
    initialize: () => {
      dispatch(loadContacts())
    },
    filter: (searchValue) => {
      dispatch(filteredContactUpdateList(searchValue))
    }
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
