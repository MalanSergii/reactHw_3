import { nanoid } from 'nanoid';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { name: this.state.name, id: nanoid(), number: this.state.number },
      ],
    }));
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  onFilterChange = e => {
    this.onInputChange(e);
  };

  render() {
    const filtered = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <form onSubmit={this.onSubmitForm}>
        <label>
          <input
            onChange={this.onInputChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          Name
        </label>{' '}
        <br />
        <label>
          <input
            onChange={this.onInputChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          Phone
        </label>
        <br />
        <button type="submit">add contact</button>
        <br />
        <label>
          <input
            onChange={this.onFilterChange}
            value={this.state.filter}
            name="filter"
          ></input>
          Find contacts by name
        </label>
        <p>Contacts:</p>
        <ul>
          {filtered.map(contact => (
            <li key={contact.id}>
              <span>{contact.name}</span>: <span>{contact.number}</span>
            </li>
          ))}
        </ul>
      </form>
    );
  }
}
