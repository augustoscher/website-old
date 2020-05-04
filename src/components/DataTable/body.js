import React from "react";

const dtf = new Intl.DateTimeFormat("pt", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});

const formatValue = (item, column) => {
  const value = item[column];
  if (column === "date") {
    return dtf.format(new Date(value));
  }
  return value;
};

const renderCols = (columns, item) => {
  return columns.map((column, idx) => (
    <td key={idx}>{formatValue(item, column)}</td>
  ));
};

const renderRow = (columns, data) => {
  return data.map((item, idx) => {
    return (
      <tr key={idx}>
        <th scope="row">{idx + 1}</th>
        {renderCols(columns, item)}
      </tr>
    );
  });
};

const Body = ({ columns, data }) => <tbody>{renderRow(columns, data)}</tbody>;

export default Body;
