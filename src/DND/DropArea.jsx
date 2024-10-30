import React, { useState } from "react";
import DailogBox from "../Components/DailogBox";

function DropArea({ dropData }) {
  const onDrop = (e) => {
    console.log("edrop", dropData);
  };
  const dragEnter = (e) => {
    console.log("enter", dropData);
  };

  const dragLeave = (e) => {
    console.log("leavee", dropData);
  };
  console.log("dropData", dropData);
  return (
    <div
      style={{ border: "2px solid black", height: "100px" }}
      onDrop={onDrop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDragOver={(e) => e.preventDefault()}
    >
      {dropData === "input" ? (
        <input />
      ) : dropData === "combobox" ? (
        <select name="cars" id="cars">
          {/* <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option> */}
        </select>
      ) : dropData === "radio" ? (
        <input type="radio" />
      ) : dropData === "checkbox" ? (
        <input type="checkbox" />
      ) : dropData === "label" ? (
        <label />
      ) : (
        ""
      )}
    </div>
  );
}

export default DropArea;
