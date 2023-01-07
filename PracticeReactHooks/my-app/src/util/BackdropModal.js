import ReactDOM from "react-dom";
import React from "react";

const BackdropModal = ( {children}) => {
  return ReactDOM.createPortal(
    <>
      <div>{children}</div>
    </>,
    document.querySelector("#backdrop")
  );
}

export default BackdropModal;