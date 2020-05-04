import React from "react";
import Header from "./header";
import Body from "./body";

const DataTable = ({ schema, data }) => (
  <table className="table">
    <Header columns={schema.labels} />
    <Body columns={schema.columns} data={data} />
  </table>
);

export default DataTable;
