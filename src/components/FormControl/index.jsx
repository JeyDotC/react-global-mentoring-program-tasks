import classNames from "classnames";
import PropTypes from "prop-types";

function FormControl({ name, label, initialValue, placeHolder, multiline, className }) {

    return (
        <div className={classNames("form-control mb-30p", className)}>
            <label className="d-block text-primary text-transform-uppercase mb-13p" htmlFor={name}>
                {label}
            </label>
            {multiline 
            ? <textarea 
                className="form-input d-block" 
                id={name}
                name={name}
                placeholder={placeHolder}
                rows={6}
                defaultValue={initialValue}></textarea>
            :<input className="form-input d-block" 
                id={name} 
                name={name} 
                defaultValue={initialValue} 
                placeholder={placeHolder}
            />}
        </div>
    );
}

FormControl.propTypes = {
    name: PropTypes.string, 
    label: PropTypes.string, 
    initialValue: PropTypes.any, 
    placeHolder: PropTypes.string,
    multiline: PropTypes.bool,
    className: PropTypes.string,
};

export { FormControl }