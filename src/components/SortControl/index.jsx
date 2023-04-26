import PropTypes from "prop-types";
import { Dropdown } from "../Dropdown";

import './SortControl.css';
import { useState } from "react";
import classNames from "classnames";

function SortControl({ id, options, currentSelection, onChange }) {

    const [menuVisible, setMenuVisible] = useState(false);

    const handleInputClicked = () => setMenuVisible(!menuVisible);

    return (
        <div id="sort-control" className="d-flex">
            <label htmlFor={id} className="text-secondary pt-20p me-13p">Sort by</label>
            <div>
                <Dropdown 
                    inputContent={<span className="pt-20p d-block">{currentSelection}</span>}
                    menuVisible={menuVisible}
                    onInputClick={handleInputClicked}
                    >
                    {options?.map(op => (
                        <div
                            className={classNames("sort-control-option mb-13p", {active: op === currentSelection})}
                            key={op}
                            type="button"
                            onClick={() => {
                                setMenuVisible(false);
                                onChange && onChange(op);
                            }}
                        >
                            {op}
                        </div>
                    ))}
                </Dropdown>
            </div>
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