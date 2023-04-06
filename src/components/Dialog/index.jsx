import { createPortal } from "react-dom";
import './Dialog.css';
import PropTypes from "prop-types";

function Dialog({ show, title, children, onCloseButtonClicked }) {
    const handleCloseButtonClick = (e) => onCloseButtonClicked && onCloseButtonClicked(e);

    if (!show) {
        return <></>;
    }

    return createPortal(
        <div className="dialog-overlay">
            <div className="dialog">
                <div className="dialog-title">
                    <div className="dialog-close">
                        <button onClick={handleCloseButtonClick}>X</button>
                    </div>
                    {title}
                </div>
                {children}
            </div>
        </div>,
        document.body
    );
}

Dialog.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.oneOfType([ PropTypes.element, PropTypes.string ]),
    onCloseButtonClicked: PropTypes.func,
};

Dialog.defaultProps = {
    show: false,
}

export { Dialog }