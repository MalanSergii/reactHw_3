import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, LebelInput, LabelText, FormButton } from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.addContacts(this.state);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitForm}>
        <LebelInput>
          <input
            onChange={this.onInputChange}
            value={this.state.name}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <LabelText>Name</LabelText>
        </LebelInput>{' '}
        <LebelInput>
          <input
            onChange={this.onInputChange}
            value={this.state.number}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <LabelText>Phone</LabelText>
        </LebelInput>
        <FormButton type="submit">add contact</FormButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  addContacts: PropTypes.func.isRequired,
  checkContactsOnIncludeEquials: PropTypes.func.isRequired,
};
