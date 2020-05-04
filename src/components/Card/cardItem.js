import React from "react";

const CardItem = ({ name, location, when, labelLink, link }) => (
  <li className="ui-timeline-item">
    <div className="ui-timeline-detail">
      <div className="timeline-item">
        <div className="timeline-item-content">
          <h4 className="timeline-item-title">{name}</h4>
          <p className="timeline-item-sub-title">
            {location}
            <span className="timeline-item-duration"> | {when}</span>
          </p>
          {link && (
            <p className="timeline-item-sub-title">
              <a href={`${link}`} rel="noopener noreferrer" target="_blank">
                {labelLink}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  </li>
);

export default CardItem;
