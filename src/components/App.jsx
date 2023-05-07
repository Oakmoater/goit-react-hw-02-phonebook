import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  addContact = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements
    const isDuplicateName = this.contacts.some(contact => contact.name === name);
    if (isDuplicateName) {
      alert(`${} is already in contacts`)
    } else {
      const newContact = {
        id: nanoid(),
        name: name.value,
        number: number.value
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }));
    }
  }

  addFilter = e => {
    this.setState({ filter: e.target.value })
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter addFilter={this.addFilter} />
        <ContactList contacts={this.state.contacts} filter={this.state.filter} />
      </>
    )
  };
};
