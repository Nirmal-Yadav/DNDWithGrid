import React, { useRef, useState, useEffect } from "react";
import "./DailogBox.css";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog1 } from "../redux/actions";

const DailogBox = () => {
  const dispatch = useDispatch();

  const [properties, setProperties] = useState({});
  const [comboOptions, setLocalComboOptions] = useState([]);
  const [style, setStyle] = useState({});
  const [propertyName, setPropertyName] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [keyValue, setKeyValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [styleName, setStyleName] = useState("");
  const [styleValue, setStyleValue] = useState("");

  const dialogRef = useRef(null);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "property-name":
        setPropertyName(e.target.value);
        break;
      case "property-value":
        setPropertyValue(e.target.value);
        break;
      case "key-value":
        setKeyValue(e.target.value);
        break;
      case "label-value":
        setLabelValue(e.target.value);
        break;
      case "style-name":
        setStyleName(e.target.value);
        break;
      case "style-value":
        setStyleValue(e.target.value);
        break;
      default:
        break;
    }
  };

  const handlePropertyClick = () => {
    if (propertyName && propertyValue) {
      setProperties((prev) => ({
        ...prev,
        [propertyName]: propertyValue,
      }));
      setPropertyName("");
      setPropertyValue("");
    }
  };

  const handleAddOption = () => {
    if (keyValue && labelValue) {
      setLocalComboOptions((prev) => [
        ...prev,
        { key: keyValue, label: labelValue },
      ]);
      setKeyValue("");
      setLabelValue("");
    }
  };

  const handleAddStyle = () => {
    if (styleName && styleValue) {
      setStyle((prev) => ({ ...prev, [styleName]: styleValue }));
      setStyleName("");
      setStyleValue("");
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      dispatch(closeDialog1());
      setLocalComboOptions([]);
    }
  };

  return (
    <div>
      <dialog ref={dialogRef} id="dailog-container-main">
        <h2>Properties Modal</h2>

        <div>
          <label htmlFor="property-name">Property Name:</label>
          <input
            name="property-name"
            onChange={handleChange}
            value={propertyName}
          />
        </div>
        <div>
          <label htmlFor="property-value">Property Value:</label>
          <input
            name="property-value"
            onChange={handleChange}
            value={propertyValue}
          />
        </div>
        <button onClick={handlePropertyClick}>Add Property</button>

        <div>
          <label htmlFor="key-value">Option Key:</label>
          <input name="key-value" onChange={handleChange} value={keyValue} />
        </div>
        <div>
          <label htmlFor="label-value">Option Label:</label>
          <input
            name="label-value"
            onChange={handleChange}
            value={labelValue}
          />
        </div>
        <button onClick={handleAddOption}>Add Option</button>

        <div>
          <label htmlFor="style-name">Style Name:</label>
          <input name="style-name" onChange={handleChange} value={styleName} />
        </div>
        <div>
          <label htmlFor="style-value">Style Value:</label>
          <input
            name="style-value"
            onChange={handleChange}
            value={styleValue}
          />
        </div>
        <button onClick={handleAddStyle}>Add Style</button>

        <button onClick={closeDialog}>Close</button>
        <div>
          <h3>Properties:</h3>
          <pre>{JSON.stringify(properties, null, 2)}</pre>
          <h3>ComboBox Options:</h3>
          <pre>{JSON.stringify(comboOptions, null, 2)}</pre>
          <h3>Style:</h3>
          <pre>{JSON.stringify(style, null, 2)}</pre>
        </div>
      </dialog>
    </div>
  );
};

export default DailogBox;
