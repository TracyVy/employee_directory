import React from "react";
import sortButton from "./SortButton";
import FilterButton from "./FilterButton.js";

const Table = (props) => {
  return (
    <div className="container">
      <table classname="mx-auto">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr>
              <td>{row.name.first}</td>
              <td>{row.name.last}</td>
              <td>{row.cell}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
