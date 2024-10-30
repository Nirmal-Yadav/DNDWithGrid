import React, { useRef } from "react";
import "./DailogBox.css";

function DailogBox({ dropData }) {
  const dailogRef = useRef();

  console.log("dropData", dropData, dailogRef);
  dailogRef?.current?.showModal();
  console.log("first", dailogRef?.current?.showModal());
  return (
    <div>
      <dialog ref={dailogRef} id="dailog-container-main">
        <h2>properties Modal</h2>
        {/* {dropData === "label" ? ( */}
        <div>
          <label htmlFor="html-for">Html For : </label>
          <input name="html-for" />
        </div>
        {/* ) : (
          ""
        )} */}
        <div>
          <label htmlFor="element_name">Element Name : </label>
          <input name="element_name" />
        </div>
        <span>
          <label htmlFor="property-name">Property Name : </label>
          <input name="property-name" />
        </span>
        <span>
          <label htmlFor="property-value">Property Value : </label>
          <input name="property-value" />
        </span>
        <div>
          {/* {dropData === "combobox" ? ( */}
          <div className="optain-container">
            <label htmlFor="option-name">Option Name : </label>
            <input name="option-name" />
            <button>Add</button>
          </div>
          {/* //   ) : (
        //     ""
        //   )} */}

          <button onClick={() => dailogRef?.current?.close()}>close</button>
        </div>
      </dialog>
    </div>
  );
}

export default DailogBox;
