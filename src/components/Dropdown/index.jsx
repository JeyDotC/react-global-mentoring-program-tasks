import { useEffect, useRef } from 'react';
import './Dropdown.css'
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Dropdown({ inputContent, children, menuVisible, onInputClick, onBlur }) {
    const inputRef = useRef(null);
    /**
     * @type {HTMLElement}
     */
    const menuRef = useRef(null);

    const menuClicked = useRef(false);


    useEffect(() => {
        if (menuVisible && inputRef.current !== null && menuRef.current !== null) {
            const { width } = inputRef.current.getBoundingClientRect();

            menuRef.current.style.minWidth = `${width}px`;
        }
    }, [menuVisible]);

    useEffect(() => {
        if (!menuVisible) {
            return;
        }

        if (menuVisible && menuClicked.current) {
            menuClicked.current = false;
        }

        const notifyBlur = () => {
            if (!menuClicked.current) {
                onBlur && onBlur();
            } else {
                menuClicked.current = false;
            }
        }
        document.body.addEventListener('click', notifyBlur);

        return () => document.body.removeEventListener('click', notifyBlur);
    }, [menuVisible]);

    const handleInputClicked = (e) => {
        e.stopPropagation();
        menuClicked.current = true;
        onInputClick && onInputClick();
    }

    const handleMenuClicked = () => menuClicked.current = true;

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
                onClick={handleMenuClicked}
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