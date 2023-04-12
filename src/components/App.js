
import { useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header'
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([])
  
  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id: uuidv4(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newContactList);
  }

  useEffect(() => {
    console.log("use effect retreave")
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(retriveContacts);
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, [])

  

  useEffect(() => {
    setTimeout(() => {
    console.log(contacts)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, 1000);
  }, [contacts])


  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} removeContactHandler={removeContactHandler} />
    </div>
  );
}

export default App;
