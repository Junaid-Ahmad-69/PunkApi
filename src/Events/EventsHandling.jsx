import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./EventsHandling.css";

const EventsHandling = () => {
  const submitHandler = (event) => {
    event.preventDeafult();
    alert("Form is Submited Successfully !");
  };

  const eventHandler = () => {
    alert("Form is Submited Successfully!");
  };

  const colorHandler = () => {
    document.body.style.backgroundColor = "#cca85f";
    console.log("runn");
  };
  return (
    <>
      <form onSubmit={() => submitHandler()}>
        <div className="form-group">
          <label htmlFor="formControl">Enter Name</label>
          <input type="text" id="formControl" />
        </div>
        <input type="reset" value="reset"></input>
        <Button name={"Submit"} onclick={() => eventHandler()} />
        <button onMouseOut={() => colorHandler()}>Change Background</button>
      </form>
    </>
  );
};

export default EventsHandling;
