import "./PunkForm.css";
import {DebounceInput} from "react-debounce-input";

const PunkForm = ({search, inputEvent, type, name, label}) => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form method="#" onSubmit={submitHandler}>
                <div className="form-control">
                    <label>{label} </label>
                    <DebounceInput
                        value={search}
                        type={type}
                        name={name}
                        debounceTimeout={1000}
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
