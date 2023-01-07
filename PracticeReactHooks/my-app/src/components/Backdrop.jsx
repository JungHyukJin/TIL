import React, { useState } from "react";
import Modal from "../util/Modal";

export default function Backdrop() {
  const [isOpen, setIsOpen] = useState(false);
  const callBackdrop = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button onClick={callBackdrop}>call Backdrop</button>
      {isOpen && <Modal />}
    </>
  );
}
