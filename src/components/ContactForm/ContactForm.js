import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    filter: '',
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onAdd, onCheckContact } = this.props;

    const isValidatedForm = onCheckContact({ name });

    if (!isValidatedForm) {
      return;
    }

    isValidatedForm && onAdd({ id: uuidv4(), name, number });

    this.reset();
  };

  reset = () => {
    this.setState({
      filter: '',
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="ContactForm" onSubmit={this.handleSubmit}>
        <div className="InputOverlay">
          <label className="InputLabel" htmlFor={this.nameInputId}>
            Name
          </label>
          <input
            className="Input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            id={this.nameInputId}
            required
          />
        </div>

        <div className="InputOverlay">
          <label className="InputLabel" htmlFor={this.numberInputId}>
            Number
          </label>
          <input
            className="Input"
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            id={this.numberInputId}
            required
          />
        </div>

        <button className="FormButton" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
