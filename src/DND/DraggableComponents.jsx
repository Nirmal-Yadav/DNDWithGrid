import React from "react";
import { componentsArray } from "../DraggableData";
import { useSelector } from "react-redux";

const DraggableComponents = ({ handleDrag }) => {
  const dialogState = useSelector((state) => state.dialogState);
  console.log("dailogState", dialogState);
  const handleDragStart = (item) => {
    handleDrag(item.name);
  };

  return (
    <div>
      {componentsArray.map((item) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(item)}
          style={{
            margin: "5px",
            padding: "5px",
            border: "1px solid gray",
            width: "100px",
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default DraggableComponents;
