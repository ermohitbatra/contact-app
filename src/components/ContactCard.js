import React from 'react'
import user from '../images/user.png'

const ContactCard = (props) => {
    return (
        <div className='item'>
            <img className='ui avatar image' src={user} alt='user'></img>
            <div className='content'>
                <div className='header'>{props.contact.name}</div>
                <div>{props.contact.email}</div>
            </div>
            <i className='trash alternate outline icon' style={{color:'red', marginTop:'7px', float:'right'}} onClick={() => props.removeContactHandler(props.contact.id)}></i>
        </div>
    )
}

export default ContactCard
