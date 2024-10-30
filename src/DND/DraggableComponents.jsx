import React, { useEffect, useState } from "react";
import { componentsArray } from "../DraggableData";
import DailogBox from "../Components/DailogBox";

function DraggableComponents({ getComponentType }) {
  const [components, setComponents] = useState([]);
  const [dropData, setDropData] = useState("");

  useEffect(() => {
    setComponents(componentsArray);
  }, []);

  const dargStart = (e) => {
    // console.log("e", e.target);
    // console.log("Dragging:", e.target.getAttribute("name"));
  };

  const dragEnd = (e) => {
    // console.log(":", e.target.getAttribute("name"));
    if (e.target.getAttribute("name")) {
      setDropData(e.target.getAttribute("name"));
      getComponentType(e.target.getAttribute("name"));
    }
  };

  return (
    <div>
      {components?.map((item, index) => {
        return (
          <div
            style={{ height: "50px", width: "80px", border: "2px solid red" }}
            draggable="true"
            key={index}
            onDragStart={dargStart}
            onDragEnd={dragEnd}
            name={item.name}
          >
            {item.name}
          </div>
        );
      })}{" "}
      {/* <DailogBox /> */}
    </div>
  );
}

export default DraggableComponents;
