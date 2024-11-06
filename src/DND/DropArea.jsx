import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDialog, setDropData } from "../redux/actions";

const DropArea = ({ element }) => {
  const [localElement, setLocalElement] = useState("");
  const { dropData } = useSelector((state) => state.dropData);

  console.log("dropData", dropData);
  const dispatch = useDispatch();

  const handleDrop = () => {
    console.log("openDialog()", openDialog());
    console.log("onDrop", element);
    dispatch(openDialog());
    dispatch(setDropData(element));
    setLocalElement(element);
  };

  const property = {
    href: "link",
    className: "hover",
  };

  const comboOptions = [];

  const customStyle = { height: "50px" };

  return (
    <div
      style={{ border: "2px solid black", height: "100%", width: "100%" }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {localElement === "input" ? (
        <input {...property} style={customStyle} />
      ) : localElement === "combobox" ? (
        <select name="cars" id="cars">
          {comboOptions.map((option, index) => (
            <option key={index} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      ) : localElement === "radio" ? (
        <input type="radio" />
      ) : localElement === "checkbox" ? (
        <input type="checkbox" />
      ) : localElement === "label" ? (
        <label>Label</label>
      ) : (
        <p>Drop your component here</p>
      )}
    </div>
  );
};

export default DropArea;
