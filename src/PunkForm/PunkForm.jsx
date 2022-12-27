import "./PunkForm.css";
const PunkForm = ({ search, inputEvent, type, name, label }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form method="#" onSubmit={submitHandler}>
        <div className="form-control">
        <label>{label} </label>
        <input
          value={search}
          type={type}
          name={name}
          onChange={(event) => {
            inputEvent(event);
          }}
        />
        </div>
      </form>
    </>
  );
};
export default PunkForm;
