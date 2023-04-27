import classNames from "classnames";
import { ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";
import './FormControl.css';

function FormControl({ name, label, type, placeHolder, multiline, useChildrenOnly, children, className }) {

    return (
        <div className={classNames("form-control mb-30p", className)}>
            <label className="d-block text-primary text-transform-uppercase mb-13p" htmlFor={name}>
                {label}
            </label>
            {!useChildrenOnly &&
                    <Field
                        as={multiline ? "textarea" : "input"}
                        id={name}
                        name={name}
                        placeholder={placeHolder}
                        className="form-input d-block"
                        type={type}
                        {...(multiline ? { rows: 6 } : {})}
                    />}
            {children}
            <ErrorMessage className="form-control-error-message text-primary" name={name} component="div" />
        </div>
    );
}

FormControl.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeHolder: PropTypes.string,
    multiline: PropTypes.bool,
    useChildrenOnly: PropTypes.bool,
    className: PropTypes.string,
};

export { FormControl }