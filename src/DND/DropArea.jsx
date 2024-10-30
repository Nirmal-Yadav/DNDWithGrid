import React, { useState } from "react";

function DropArea() {
  const onDrop = (e) => {
    // console.log("edrop", e);
    setDropData({ id: 1, name: "input" });
  };
  const dragEnter = (e) => {
    // console.log("entere", e);
  };

  const dragLeave = (e) => {
    // console.log("leavee", e);
  };
  return (
    <div
      style={{ border: "2px solid black", height: "100px" }}
      onDrop={onDrop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDragOver={(e) => e.preventDefault()}
    ></div>
  );
}

export default DropArea;
