import { createPortal } from "react-dom";
import './Dialog.css';
import PropTypes from "prop-types";
import classNames from "classnames";

function Dialog({ 
    show, 
    title,
    children,
    onCloseButtonClicked,
    mode = "dialog",
    dialogStyles,
}) {
    const handleCloseButtonClick = (e) => onCloseButtonClicked && onCloseButtonClicked(e);

    if (!show) {
        return <></>;
    }

    return createPortal(
        <div className={classNames("dialog-overlay", mode || "dialog")}>
            <div className="dialog" style={dialogStyles}>
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
    mode: PropTypes.oneOf(["dialog", "context"]),
};

Dialog.defaultProps = {
    show: false,
    mode: "dialog",
}

export { Dialog }