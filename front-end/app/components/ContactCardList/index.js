/**
*
* ContactCardList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import ContactCard from 'components/ContactCard';
// import styled from 'styled-components';


function ContactCardList(props) {
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item) =>(
        <ContactCard key={`item-${item.id}`} contact={item} />
      )
    );
  } else {
    // Otherwise render a single component
    content = (<div>No contacts were found.</div>);
  }
  console.log(content);
  return (

    <div>
      {content}
    </div>
  );
}

ContactCardList.propTypes = {
  items: PropTypes.array
};

export default ContactCardList;
