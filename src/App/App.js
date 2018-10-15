import React, { Component } from 'react';

import './App.css';
import ContactForm from '..'


class App extends Component {
  
 state = {
   contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
   previousState: null
 }


 } 
  


 
  render() {
    return (
      <div className="App">
        <div className="title">Contact List App</div>
          <ContactForm addContactsFunction={this.addContact} />
          <ul> {
            this.state.contacts.map(
              contact => (
                <li key={contact.id}>
                {contact.isFavorite ?
                <span onClick={() => this.toggleContactFavorites(contact.id)}>&#9733</span> :
                <span onClick={() => this.toggleContactFavorites(contact.id)}>&#9733</span>
                {contact.name} {contact.surname} <br /> {contact.number}
                
              
              
              }
                
                
                </li>
              )
            )
            
            </ul>
      </div>
    );
  }
}

export default App;
