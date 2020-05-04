import React, { useState, useEffect } from "react";
import Card from "../../components/Card/card";
import CardContent from "../../components/Card/cardContent";
import fetchAnalytics from "../../services/fetchAnalytics";
import DataTable from "../../components/DataTable/dataTable";

const visitsColumns = {
  labels: ['Origin', 'IP', 'Country', 'Access Type', 'Date'],
  columns: ['origin', 'sourceIp', 'country', 'accessType', 'date']
}

const pageViewsColumns = {
  labels: ['Path', 'Views', 'Date'],
  columns: ['path', 'views', 'date']
}

const renderVisitsContent = v => 
  <CardContent>
    <DataTable schema={visitsColumns} data={v} />  
  </CardContent>;

const renderVisits = visits => (
  <Card title="Visits">{renderVisitsContent(visits)}</Card>
);

const renderPageViewsContent = p => 
  <CardContent>
    <DataTable schema={pageViewsColumns} data={p} />  
  </CardContent>;

const renderPageViews = pageViews => (
  <Card title="Page Views">{renderPageViewsContent(pageViews)}</Card>
);

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    let mounted = true;

    const getData = async () => {
      const results = await fetchAnalytics();
      if (mounted) {
        setAnalytics(results);
      }
    };

    getData();
    return () => { mounted = false; };
  }, []);

  const showDetails = () => setDetails(!details)

  if (!analytics) {
    return <span>Loading...</span>;
  }
  
  return (
    <div className="container">
      <button type="button" onClick={showDetails}>Details</button>
      {details ? renderPageViews(analytics.pageViews) : undefined }
      {details ? renderVisits(analytics.visits) : undefined }
    </div>
  );
};

export default Analytics;