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
    const filtered = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className="phonebook">
        <h1>Phoneboook</h1>
        <ContactForm
          addContacts={this.addContacts}
          checkContactsOnIncludeEquials={this.checkContactsOnIncludeEquials}
        />
        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          onFilterChange={this.onFilterChange}
        ></Filter>
        <ContactList
          onClickDeleteButton={this.onClickDeleteButton}
          filtered={filtered}
        />
      </div>
    );
  }
}
