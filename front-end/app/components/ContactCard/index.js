/**
*
* ContactCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function ContactCard(props) {
  return (
    <div>
      <div className="Name">{props.contact.firstName} {props.contact.lastName}</div>
      <div className="Email">{props.contact.email}</div>
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.any
};

export default ContactCard;
