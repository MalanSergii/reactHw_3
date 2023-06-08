import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = data => {
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { id: nanoid(), name: data.name, number: data.number },
      ],
    }));
  };

  onFilter = data => {
    this.setState(() => ({
      filter: data,
    }));
  };

  render() {
    const filtered = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className="phonebook">
        <h1>Phoneboook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          onFilter={this.onFilter}
        ></Filter>
        <ContactList filtered={filtered} />
      </div>
    );
  }
}
