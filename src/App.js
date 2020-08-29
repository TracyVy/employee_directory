import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import data from "./data/employees.json";
import Nav from "./components/Nav";
import SortAZ from "./components/SortAZ";
import SortZA from "./components/SortZA";
import Filter from "./components/Filter";

function App() {
  const [employees, updatedEmployees] = useState(data);

  return (
    <div className="App">
      <div className="page-container mx-auto">
        <Nav />

        <div className="container">
          <SortAZ updatedEmployees={updatedEmployees} employees={employees} />
          <SortZA updatedEmployees={updatedEmployees} employees={employees} />
          <br />
          <Filter updatedEmployees={updatedEmployees} employees={data} />
          <br />
          <Table data={employees} />
        </div>
      </div>
    </div>
  );
}

export default App;
