import React from "react";

const SortZA = (props) => {
  const compareBy = (key) => {
    return function (a, b) {
      if (b["name"][key] < a["name"][key]) return -1;
      if (b["name"][key] > a["name"][key]) return 1;
      return 0;
    };
  };

  const sortZA = () => {
    const sortedZA = props.employees.sort(compareBy("last"));
    props.updatedEmployees([...sortedZA]);
  };

  return <button onClick={sortZA}>Sort by Last Name (A - Z)</button>;
};

export default SortZA;
