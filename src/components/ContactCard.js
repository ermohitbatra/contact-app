import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user"></img>
      <div className="content">
        <Link
          to={`/contact/${props.contact.id}`}
          state={{contact:props.contact}}
        >
          <div className="header">{props.contact.name}</div>
          <div>{props.contact.email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          marginTop: "7px",
          float: "right",
          cursor: "pointer",
        }}
        onClick={() => props.removeContactHandler(props.contact.id)}
      ></i>
    </div>
  );
};

export default ContactCard;
