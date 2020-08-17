import React from "react";

const Table = (props) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Date Registered</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr>
              <td>{row.registered.date}</td>
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
