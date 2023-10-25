import React, {Component} from 'react'
import { AddContastForm } from './AddContastForm/AddContastForm'
import { Container } from '@mui/material'
import { ContactsList } from './ContactsList/ContactsList'
import { Filter } from './Filter/Filter'
import { nanoid } from "nanoid";


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
  componentDidMount() {
    const savedContacs = localStorage.getItem(`contacts`);
    if(savedContacs !== null) {
      this.setState({
        contacts: JSON.parse(savedContacs)
      });
    }

  }     
 
 
 componentDidUpdate(prevPros, prevState) {
 if(this.state.contacts !== prevState.contacts) {
  localStorage.setItem(`contacts`,JSON.stringify(this.state.contacts))
 }
 }
 

addContact = newContact => {
  const isExist = this.state.contacts.find(contact => {
    return newContact.name === contact.name;
  })
  if (isExist) {
    alert(`${newContact.name} is already in contacts`);
    return;
  }

  this.setState(prevState => ({
    contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
  }));
};

handleDeleteContact = (id) => {
  this.setState(prevState => ({contacts: prevState.contacts.filter((contact) => contact.id!== id) }))
}

handleChange = (evt) => {
  this.setState(prevState => ({filter: evt.target.value}));
}

getFilterContacts = () => {
  const normalizedFilter = this.state.filter.toLowerCase().trim();
  return this.state.contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(normalizedFilter)

  });
}
  render() {
      return (
    < Container maxWidth="xl" >
        <h1>Phonebook</h1>
<AddContastForm addContast={this.addContact} contactsList={this.contacts}/>
<h2>Contacts</h2>   
     <Filter handleChange={this.handleChange}/>
     <ContactsList 
     contacts={this.getFilterContacts()}
     onDeleteContact={this.handleDeleteContact}/>
  
    </ Container >
  )};

}


