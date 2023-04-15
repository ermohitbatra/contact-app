import { useState } from "react";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./ContactDetails";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, 1000);
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route exact path="/" element={<ContactList contacts={contacts} removeContactHandler={removeContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetails/>} />
          {/* <AddContact addContactHandler={addContactHandler} /> */}
          {/* <ContactList contacts={contacts} removeContactHandler={removeContactHandler} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
