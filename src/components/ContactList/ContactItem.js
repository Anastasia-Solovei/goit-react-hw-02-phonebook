import React from 'react';

import './ContactItem.scss';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className="ContactItem">
      <p className="ContactItemText">
        {name}: {number}
      </p>

      <button
        className="DeleteBtn"
        id={id}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
