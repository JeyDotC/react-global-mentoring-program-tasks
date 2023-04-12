import classNames from "classnames";
import PropTypes from "prop-types";

function Input({ name, placeHolder, initialValue, multiline }) {
    return <>
        {multiline
            ? <textarea
                className="form-input d-block"
                id={name}
                name={name}
                placeholder={placeHolder}
                rows={6}
                defaultValue={initialValue}
            ></textarea>
            : <input className="form-input d-block"
                id={name}
                name={name}
                defaultValue={initialValue}
                placeholder={placeHolder}
            />}
    </>
}

function FormControl({ name, label, initialValue, placeHolder, multiline, useChildrenOnly, children, className }) {

    return (
        <div className={classNames("form-control mb-30p", className)}>
            <label className="d-block text-primary text-transform-uppercase mb-13p" htmlFor={name}>
                {label}
            </label>
            {!useChildrenOnly && 
            <Input 
                name={name} 
                placeHolder={placeHolder} 
                initialValue={initialValue}
                multiline={multiline}
            />}
            {children}
        </div>
    );
}

FormControl.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    initialValue: PropTypes.any,
    placeHolder: PropTypes.string,
    multiline: PropTypes.bool,
    useChildrenOnly: PropTypes.bool,
    className: PropTypes.string,
};

export { FormControl }