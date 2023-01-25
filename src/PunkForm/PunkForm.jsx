import "./PunkForm.css";
import {DebounceInput} from "react-debounce-input";

const PunkForm = ({search, inputEvent, type, name, label}) => {

    return (
        <>
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
        </>
    );
};
export default PunkForm;

