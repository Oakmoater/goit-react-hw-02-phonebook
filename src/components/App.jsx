import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  addContact = (e) => {
    e.preventDefault();
    const {name, number} = e.target.elements
    const newContact = {
      id: nanoid(),
      name: name.value,
      number: number.value
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
    console.log(this.state.contacts)
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </>
    )
  };
};
