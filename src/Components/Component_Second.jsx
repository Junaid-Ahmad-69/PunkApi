import Component_Third from "./Component_Third";

const third = "3rd Component";
const Component_Second = ({ name2 }) => {
  return (
    <>
      <p>{name2}</p>
      <Component_Third hello={third} />
    </>
  );
};

export default Component_Second;
