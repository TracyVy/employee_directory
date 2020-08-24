import React from "react";

const FilterButton = () => {
  return (
    <div>
      <select>
        <option selected value="gender">
          Gender
        </option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </div>
  );
};

export default FilterButton;
