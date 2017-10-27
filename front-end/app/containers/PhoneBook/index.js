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
import { makeSelectFilteredContacts, makeSelectContacts, makeSelectIsModalVisible } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadContacts, filteredContactUpdateList, showModal } from './actions';

import ContactCardList from 'components/ContactCardList';
import MainHeader from 'components/MainHeader';
import ContactModal from 'components/ContactModal';

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
      <section className="section">
      <div className="container is-fluid">
      <div>
        <ContactModal isVisible={this.props.isModalVisible}></ContactModal>
        <Helmet>
          <title>PhoneBook</title>
          <meta name="description" content="Description of PhoneBook" />
        </Helmet>
       
        {
          this.props.contacts ? (<MainHeader onShowModal={this.onShowModal.bind(this)}
          numberContacts={this.props.contacts.length}
            onSearchChange={this.onSearchChange.bind(this)} />) : (<div></div>)
        }
        {card}
      </div>
      </div>
      </section>
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
  onShowModal(){
    this.props.showModal();
  }
}

PhoneBook.propTypes = {
  contacts: PropTypes.array,
  filteredContacts: PropTypes.array,
  dispatch: PropTypes.func,
  onSearchChange: PropTypes.func,
  isModalVisible:PropTypes.bool
};
const mapStateToProps = createStructuredSelector({
  contacts: makeSelectContacts(),
  filteredContacts: makeSelectFilteredContacts(),
  isModalVisible:makeSelectIsModalVisible()
});

function mapDispatchToProps(dispatch) {
  return {
    initialize: () => {
      dispatch(loadContacts())
    },
    filter: (searchValue) => {
      dispatch(filteredContactUpdateList(searchValue))
    },
    showModal: () => {
      dispatch(showModal())
    },
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
