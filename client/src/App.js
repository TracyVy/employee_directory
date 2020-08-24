import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import data from "./data/employees.json";
import Nav from "./components/Nav";
import SortAZ from "./components/SortAZ";
import SortZA from "./components/SortZA";
import FilterButton from "./components/FilterButton";

function App() {
  const [employees, updatedEmployees] = useState(data);

  return (
    <div className="App">
      <div className="page-container mx-auto">
        <Nav />

        <SortAZ updatedEmployees={updatedEmployees} employees={employees} />
        <SortZA updatedEmployees={updatedEmployees} employees={employees} />
        <FilterButton />

        <Table data={employees} />
      </div>
    </div>
  );
}

export default App;
