import React from "react";
import ContactContent from './contactContent';
import ContactItem from './contactItem';

const ContactCard = ({ title, subtitle, copy }) => (
  <div className="container">
    <div className="section-card">
      <h3>{title}</h3>
      <p className="paragraph">{subtitle}</p>
      <div>
        <ContactContent>
          <ContactItem
            link="https://twitter.com/augustoschergm1"
            iconStyle="fa fa-twitter fa-stack-1x fa-inverse"
          />
          <ContactItem
            link="https://www.facebook.com/augusto.scher"
            iconStyle="fa fa-facebook fa-stack-1x fa-inverse"
          />
          <ContactItem
            link="https://github.com/augustoscher"
            iconStyle="fa fa-github fa-stack-1x fa-inverse"
          />
          <ContactItem
            link="https://www.linkedin.com/in/augusto-scher"
            iconStyle="fa fa-linkedin fa-stack-1x fa-inverse"
          />
          <ContactItem
            link="mailto:augustoscher@gmail.com"
            iconStyle="fa fa-google fa-stack-1x fa-inverse"
          />
        </ContactContent>
        <br />
        <p className="copyright paragraph text-muted">{copy}</p>
      </div>
    </div>
  </div>
);

export default ContactCard;
