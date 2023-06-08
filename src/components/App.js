import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { Body } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: '8l9QV2f4LUSfDzXZjsExO', name: 'Sergii', number: '+343-245-245' },
      { id: '8l9QV2f4LUSfDzXZsdasExO', name: 'Olena', number: '+344-245-001' },
    ],
    filter: '',
  };

  checkContactsOnIncludeEquials = data => {
    this.state.contacts.map(contact =>
      contact.name === data.name
        ? () => {
            console.log(data.name, contact.name);
            return;
          }
        : this.addContacts(data)
    );
  };

  onClickDeleteButton = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  addContacts = data => {
    const includes = this.state.contacts.some(
      contact => contact.name === data.name
    );
    if (!includes) {
      this.setState(prev => ({
        contacts: [
          ...prev.contacts,
          { id: nanoid(), name: data.name, number: data.number },
        ],
      }));
      return;
    }
    alert(`${data.name} is already in the list`);
  };

  onFilterChange = data => {
    this.setState({
      filter: data,
    });
  };

  render() {
    const enableContacts = this.state.contacts.length;

    const filtered = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Body className="phonebook">
        <h1>Phoneboook</h1>
        <ContactForm
          addContacts={this.addContacts}
          checkContactsOnIncludeEquials={this.checkContactsOnIncludeEquials}
        />
        {enableContacts ? (
          <>
            <h2>Contacts</h2>
            <Filter
              filterValue={this.state.filter}
              onFilterChange={this.onFilterChange}
            ></Filter>

            <ContactList
              onClickDeleteButton={this.onClickDeleteButton}
              filtered={filtered}
            />
          </>
        ) : (
          <p>There is no contacts in your phonebook</p>
        )}
      </Body>
    );
  }
}
