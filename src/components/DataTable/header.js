import React from "react";

const renderCols = cols =>
  cols.map((c, idx) => (
    <th key={idx} scope="col">
      {c}
    </th>
  ));

const Header = ({ columns }) => (
  <thead>
    <tr>
      <th scope="row">#</th>
      {renderCols(columns)}
    </tr>
  </thead>
);

export default Header;
