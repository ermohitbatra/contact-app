import React from "react";
import user from "../images/user.png";
import { useLocation, Link } from "react-router-dom";

const ContactDetails = () => {
  let location = useLocation();
  const { name, email } = location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div style={{textAlign:"center"}}>
          <Link to="/">
            <button className="ui center floated primary button">
              Back to Contact List
            </button>
          </Link>
        </div>
    </div>
  );
};

export default ContactDetails;
