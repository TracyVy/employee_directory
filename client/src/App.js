import React from "react";
import "./App.css";
import Table from "./components/Table";
import data from "./data/employees.json";

function App() {
  return (
    <div className="App">
      <div className="page-container mx-auto">
        <h1>Employees Table</h1>

        <Table data={data} />
      </div>
    </div>
  );
}

export default App;
