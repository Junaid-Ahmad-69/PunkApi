import React, { useState } from "react";
import Component_Second from "./Component_Second";
import Toggle from "../Toogle";

const second = "second Components";
const Component_First = ({ name }) => {
  const [toggle, setToggle] = useState(false);
  const [content, setContent] = useState("Read More");

  return (
    <>
      <p>{name}</p>
      <Component_Second name2={second} />
      <button
        onClick={() => {
          setToggle(!toggle);
          setContent("Hide");
        }}
      >
        {content}
      </button>
      {toggle && <Toggle />}
    </>
  );
};
export default Component_First;
