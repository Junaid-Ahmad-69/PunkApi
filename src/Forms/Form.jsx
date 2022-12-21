import React, { useState } from "react";
import Button from "../Button/Button";

const Form = () => {
  const [user, setUser] = useState("");
  const [fullName, setFullName] = useState();

  const sumbitHandler = (e) => {
    e.preventDefault();
  };

  const inputHandler = (event) => {
    console.log(event.target.value);
    setUser(event.target.value);
  };
  const changeHandler = () => {
    setFullName(() => {
      return user;
    });
  };

  return (
    <>
      <form action="#" onSubmit={() => sumbitHandler()}>
        <div className="form-group">
          <h2>Hello {fullName}</h2>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="John"
            onChange={inputHandler}
            value={user}
          />
          <Button name={"sumbit"} onclick={() => changeHandler()} />
        </div>
      </form>
    </>
  );
};

export default Form;
