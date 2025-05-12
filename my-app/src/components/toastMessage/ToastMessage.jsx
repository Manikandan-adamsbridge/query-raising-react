import React, { useEffect, useRef, useContext } from "react";
import { Toast } from "bootstrap";
import { Common } from "../../contextapi/common";

function ToastMessage() {
  const toastRef = useRef(null);
    const { toastMessage, setToastMessage } = useContext(Common);
    const toastInstanceRef = useRef(null);

    useEffect(() => {
        if (toastMessage && toastRef.current) {
            // Prevent reinitialization
            if (!toastInstanceRef.current) {
                toastInstanceRef.current = new Toast(toastRef.current, {
                    autohide: true,
                    delay: 3000
                });
            }
            toastInstanceRef.current.show();

            const timer = setTimeout(() => {
                setToastMessage(null);
                toastInstanceRef.current = null;
            }, 3100); 

            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    if (!toastMessage) return null;

    return (
        <div
            ref={toastRef}
            className="toast align-items-center text-white border-0 position-fixed top-0 end-0 m-3 z-1"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                <div className="toast-body" style={{width: "80%"}}>{toastMessage}</div>
                <button
                    type="button"
                    className="btn-close btn-close-white m-2"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    onClick={() => setToastMessage(null)}
                ></button>
            </div>
        </div>
    );
}

export default ToastMessage