import React, { useState } from "react";
import DraggableComponents from "./DND/DraggableComponents";
import DropArea from "./DND/DropArea";
import DailogBox from "./Components/DailogBox";
import { useDispatch, useSelector } from "react-redux";
import { openDialog, setDropData } from "./redux/actions";

function App() {
  const [element, setElement]= useState("")

  const dropData = useSelector((state)=> state.dropData.dropData)
  const dialogState = useSelector((state)=> state.dialogState)

  console.log('dialogState', dialogState)

  console.log('dropData', dropData)

 
const handleDrag = (data)=>{

setElement(data)
}
 
  return (
    <div>
      <DraggableComponents   
      handleDrag={handleDrag}
      />
      <DropArea element={element} 
        />
    {  dialogState && <DailogBox  />}
    </div>
  );
}

export default App;
