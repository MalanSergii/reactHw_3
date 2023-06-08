import { nanoid } from 'nanoid';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onInputChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  onButtonCLick = () => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { name: this.state.name, id: nanoid() }],
    }));
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <div>
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

        <button type="button" onClick={this.onButtonCLick}>
          add contact
        </button>
        <p>Contacts:</p>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
