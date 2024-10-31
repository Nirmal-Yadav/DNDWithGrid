import React from "react";
import { componentsArray } from "../DraggableData";

const DraggableComponents = ({ getComponentType }) => {
  const handleDragStart = (item) => {
    getComponentType(item.name);
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
