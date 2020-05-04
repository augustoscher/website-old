import React, { useState, useEffect } from "react";
import "./about.css";
import Card from "../../components/Card/card";
import CardContent from "../../components/Card/cardContent";
import CardItem from "../../components/Card/cardItem";
import Loading from "../../components/Loading/loading";
import fetchProfessionalData from "../../services/fetchProfessionalInfo";

const renderItems = (items) =>
  items.map((item, idx) => (
    <CardItem
      key={idx}
      name={item.name}
      location={item.location}
      when={item.when}
      labelLink={item.labelLink}
      link={item.link}
    />
  ));

const renderContent = (p) => <CardContent>{renderItems(p)}</CardContent>;

const About = () => {
  const [professionalData, setProfessionalData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const getData = async () => {
      const results = await fetchProfessionalData();
      if (mounted) {
        setProfessionalData(results);
      }
    };

    getData();
    return () => {
      mounted = false;
    };
  }, []);

  if (!professionalData) {
    return <Loading />;
  }

  return professionalData.map((prof, idx) => (
    <div className="container" key={idx}>
      <Card title="Experiência">{renderContent(prof.experiences)}</Card>
      <Card title="Educação">{renderContent(prof.graduations)}</Card>
      <Card title="Certificados e Licenças">
        {renderContent(prof.licenses)}
      </Card>
    </div>
  ));
};

export default About;
