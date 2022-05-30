import React from "react";

import "./Dropdown.css";
import "./Information.css";

function Dropdown() {
  return (
    <div className="Dropdown">
      <select class="selectColor" onchange="changeColor(this)">
        <option>Class </option>
        <option>Class VIII</option>
        <option>Class IX</option>
        <option>Class X</option>
        <option>Class XI</option>
        <option>Class XII</option>
      </select>
      <select class="selectColor" onchange="changeColor(this)">
        <option>SUBJECT</option>
        <option>PHYSICS</option>
        <option>CHEMISTRY</option>
        <option>BIOLOGY</option>
      </select>
    </div>
  );
}

export default Dropdown;
