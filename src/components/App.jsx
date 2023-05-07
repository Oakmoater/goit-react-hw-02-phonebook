import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm/ContactForm'

export class App extends Component {
 state = {
  contacts: [],
  name: '',
  number: ''
}
  addContact = (e) => {
    e.preventDefault();
    console.log(e.target.elements.name.value);
    console.log(e.target.elements.number.value);
  }

  generateId = nanoid()

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
      </>
    )
  };
};
