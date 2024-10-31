import React from "react";

const DropArea = ({ dropData, onDrop }) => {
  const handleDrop = () => {
    onDrop(dropData);
  };

  const property = {
    href: "link",
    className: "hover",
  };

  const comboOptions = [];

  const customStyle = { height: "50px" };

  return (
    <div
      style={{ border: "2px solid black", height: "100px" }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {dropData === "input" ? (
        <input {...property} style={customStyle} />
      ) : dropData === "combobox" ? (
        <select name="cars" id="cars">
          {comboOptions.map((option, index) => (
            <option key={index} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      ) : dropData === "radio" ? (
        <input type="radio" />
      ) : dropData === "checkbox" ? (
        <input type="checkbox" />
      ) : dropData === "label" ? (
        <label>Label</label>
      ) : (
        <p>Drop your component here</p>
      )}
    </div>
  );
};

export default DropArea;
