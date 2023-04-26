import { useEffect, useRef } from 'react';
import './Dropdown.css'
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Dropdown({ inputContent, children, menuVisible, onInputClick }) {
    const inputRef = useRef(null);
    /**
     * @type {HTMLElement}
     */
    const menuRef = useRef(null);

    useEffect(() => {
        if (menuVisible && inputRef.current !== null && menuRef.current !== null) {
            const { width } = inputRef.current.getBoundingClientRect();

            menuRef.current.style.minWidth = `${width}px`;
        }
    }, [menuVisible]);

    const handleInputClicked = () => {
        onInputClick && onInputClick();
    }

    return (
        <>
            <div
                className="dropdown-input form-input d-flex"
                onClick={handleInputClicked}
                ref={inputRef}
            >
                <div>
                    {inputContent}
                </div>
                <i className="text-primary">
                    {menuVisible ? <>&#9650;</> : <>&#9660;</>}
                </i>
            </div>

            <div 
                className={classNames("dropdown-menu b-dark", { 'd-none': !menuVisible })} 
                ref={menuRef}
            >
                {children}
            </div>
        </>
    );
}

Dropdown.propTypes = {
    inputContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    menuVisible: PropTypes.bool, 
    onInputClick: PropTypes.func,
};

export { Dropdown }