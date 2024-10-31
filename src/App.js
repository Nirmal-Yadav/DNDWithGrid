import React, { useState } from "react";
import DraggableComponents from "./DND/DraggableComponents";
import DropArea from "./DND/DropArea";
import DailogBox from "./Components/DailogBox";

function App() {
  const [dropData, setDropData] = useState("");

  const getComponentType = (data) => {
    console.log("Setting dropData:", data);
    setDropData(data); }

  const handleDrop = (data) => {
    console.log("Dropped data:", data);
    getComponentType(data); 
  };

  return (
    <div>
      <DraggableComponents getComponentType={getComponentType} />
      <DropArea dropData={dropData} onDrop={handleDrop} />
    {  dropData && <DailogBox dropData={dropData} getComponentType={getComponentType} />}
    </div>
  );
}

export default App;
