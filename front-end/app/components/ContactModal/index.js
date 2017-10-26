/**
*
* ContactModal
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PropTypes from 'prop-types';

class ContactModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className={"modal " + (this.props.isVisible ? 'is-active' : '')}>
          <div className="modal-background"></div>
          <div className="modal-content form-container">
            <div className="container is-fluid">
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="e.g Alex" />
                </div>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="e.g Smith" />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
              </div>
              <div className="control">
                <button className="button is-primary">Submit</button>
              </div>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close"></button>
        </div>
      </div>
    );
  }
}

ContactModal.propTypes = {
  isVisible: PropTypes.bool,
  contact: PropTypes.any
};


export default ContactModal;
