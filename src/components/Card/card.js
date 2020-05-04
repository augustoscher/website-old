import React from "react";

const Card = ({ title, children }) => {
  return (
    <section className="section-card">
      <header className="section-card-header">
        <h4 className="section-card-heading">{title}</h4>
      </header>
      <div className="section-card-content">{children}</div>
    </section>
  );
};

export default Card;
