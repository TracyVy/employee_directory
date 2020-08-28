import React from "react";

const Filter = (props) => {
  const { filterVal } = props;

  const filter = (e) => {
    const filteredEmployees = props.employees.filter(
      (emp) =>
        emp.name.first
          .toLowerCase()
          .indexOf(e.currentTarget.value.toLowerCase()) != -1 ||
        emp.name.last
          .toLowerCase()
          .indexOf(e.currentTarget.value.toLowerCase()) != -1
    );

    props.updatedEmployees([...filteredEmployees]);
  };

  return (
    <div>
      <input
        type="text"
        onChange={filter}
        placeholder="Search names"
        value={filterVal}
      />
    </div>
  );
};

export default Filter;
