import { nanoid } from 'nanoid';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
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

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label>
          Name
          <input
            onChange={this.onInputChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Phone
          <input
            onChange={this.onInputChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">add contact</button>
        <p>Contacts:</p>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              <span>{contact.name}</span>: <span>{contact.number}</span>
            </li>
          ))}
        </ul>
      </form>
    );
  }
}
