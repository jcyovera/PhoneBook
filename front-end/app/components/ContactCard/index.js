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
    <div className="column is-3">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="Name">{props.contact.firstName} {props.contact.lastName}</div>
        <div className="Email">{props.contact.email}</div>
      </div>
    </div>
  </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.any
};

export default ContactCard;
