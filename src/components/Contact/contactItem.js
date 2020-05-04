import React from "react";

const ContactItem = ({link, iconStyle}) => (
  <li className="list-inline-item">
    <a href={`${link}`}>
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className={`${iconStyle}`}></i>
      </span>
    </a>
  </li>
);

export default ContactItem;
