import React from 'react';

import ContactItem from './ContactItem';
import './ContactList.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts &&
        contacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
};

export default ContactList;
