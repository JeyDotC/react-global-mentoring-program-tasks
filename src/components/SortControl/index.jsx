import PropTypes from "prop-types";

import './SortControl.css';

function SortControl({ id, options, currentSelection, onChange }){

    const handleSelectChange = (event) => onChange && onChange(event.target.value);

    return (
        <div className="sort-control">
            <label htmlFor={id} className="text-secondary">Sort by</label>
            <select id={id} onChange={handleSelectChange} value={currentSelection || ""}>
                {options?.map(op => (
                    <option key={op} value={op}>{op.toUpperCase()}</option>
                ))}
            </select>
            <i className="text-primary">&#9660;</i>
        </div>
    );
}

SortControl.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
    currentSelection: PropTypes.string,
    onChange: PropTypes.func,
};

SortControl.defaultProps = {
    id: "sort-control",
    options: [],
    currentSelection: "",
};

export { SortControl }