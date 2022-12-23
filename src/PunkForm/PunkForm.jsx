import "./PunkForm.css";
const PunkForm = ({ name, type, value, handler, onSubmit }) => {
  return (
    <>
      <form action="#" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="punk-name">{name}</label>
          <input type={type} value={value} onChange={handler} />
        </div>
      </form>
    </>
  );
};

export default PunkForm;
