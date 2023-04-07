import { useEffect, useRef, useState } from 'react';
import './Dropdown.css'
import classNames from 'classnames';

function Dropdown({ inputContent, children }) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuWidth, setMenuWidth] = useState('100px');

    const inputRef = useRef(null);

    useEffect(() => {
        if (menuVisible && inputRef.current !== null) {
            const width = inputRef.current.getBoundingClientRect().width;
            setMenuWidth(`${width}px`);
        }
    }, [menuVisible]);

    const handleInputClicked = () => {
        setMenuVisible(!menuVisible);
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

            <div className={classNames("dropdown-menu b-dark", { 'd-none': !menuVisible })} style={{ width: menuWidth }}>
                {children}
            </div>
        </>
    );
}

export { Dropdown }