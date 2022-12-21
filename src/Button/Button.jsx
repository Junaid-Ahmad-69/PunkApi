import "./Button.css";

const Button = ({ name, onclick }) => {
  return (
    <div className="button-control">
      <button type="button" onClick={onclick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
