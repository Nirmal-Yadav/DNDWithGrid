import React, { useState } from "react";
import DraggableComponents from "./DND/DraggableComponents";
import DropArea from "./DND/DropArea";
import DailogBox from "./Components/DailogBox";

function App() {
  const [dropData, setDropData] = useState("")

  const getComponentType = (data)=>{
setDropData(data)
  }
  return (
    <div>
     <DraggableComponents getComponentType={getComponentType}/>
     <DropArea dropData={dropData}/>
     <DailogBox dropData={dropData}/>

    </div>
  );
}

export default App;
