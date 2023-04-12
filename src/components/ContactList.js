import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const removeContactHandler = (id) => {
        props.removeContactHandler(id)
    }
    const reanderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard key={contact.id} contact={contact} removeContactHandler={removeContactHandler}></ContactCard>
        )
    })
  return (
    <div className='ui celled list'>
      {reanderContactList}
    </div>
  )
}

export default ContactList
