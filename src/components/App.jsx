import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm/ContactForm'

export class App extends Component {
 state = {
  contacts: [],
  name: '',
  number: ''
}

  generateId = nanoid()

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
      </>
    )
  };
};
