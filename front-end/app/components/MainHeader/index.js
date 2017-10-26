/**
*
* MainHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class MainHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="columns">
         <div className="column is-3">
        <a className="button is-primary" onClick={this.onShowModalNew.bind(this)}>New Contact</a>
        </div>
        <div className="column is-3">
        Contacts count: {this.props.numberContacts}
        </div>
        <div className="column is-3"> 
          <input placeholder="Search" type="text" className="input" onChange={this.onChangeSearch.bind(this)} /></div>
      </div>
    );
  }
  onChangeSearch(searchValue){
    this.props.onSearchChange(searchValue);
  }
  onShowModalNew(value){
    this.props.onShowModal(value);
  }
}

MainHeader.propTypes = {
  numberContacts: PropTypes.number,
  onSearchChange:PropTypes.func,
  onShowModal:PropTypes.func
};


export default MainHeader;
