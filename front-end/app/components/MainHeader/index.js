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
      <div>
        Contacts count: {this.props.numberContacts}
        <div> <input placeholder="Search" type="text" onChange={this.myChange.bind(this)} /></div>
      </div>
    );
  }
  myChange(Fuck){
    this.props.onSearchChange(Fuck);
  }
}

MainHeader.propTypes = {
  numberContacts: PropTypes.number,
  onSearchChange:PropTypes.func
};


export default MainHeader;
