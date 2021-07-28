import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import INITIAL_STATE from '../data/state_data.js';

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleAddContact = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleDeleteContact = e => {
    const { id } = e.currentTarget;

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleCheckUniqueContact = ({ name }) => {
    const { contacts } = this.state;

    const isExistContact = !!contacts.find(contact => contact.name === name);

    isExistContact && alert('Contact is already exist!');

    return !isExistContact;
  };

  handleFilterChange = e => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return filteredContacts;
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <Section>
          <ContactForm
            onAdd={this.handleAddContact}
            onCheckContact={this.handleCheckUniqueContact}
          />
        </Section>

        <Section title={'Contacts'}>
          <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
