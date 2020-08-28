import React from "react";

const SortAZ = (props) => {
  const compareBy = (key) => {
    return function (a, b) {
      if (a["name"][key] < b["name"][key]) return -1;
      if (a["name"][key] > b["name"][key]) return 1;
      return 0;
    };
  };

  const sortAZ = () => {
    const sortedAZ = props.employees.sort(compareBy("last"));
    props.updatedEmployees([...sortedAZ]);
  };

  return <button onClick={sortAZ}>Sort last name (A - Z)</button>;
};

export default SortAZ;
