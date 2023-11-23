import React, { useEffect } from "react";

const MyModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>

      {/* Main Modal Start */}
      <div className="modal-container">
        <h2>Modal Start</h2>
        <p>
          Filler text is text that shares some characteristics of a real written
          text, but is random or otherwise generated. It may be used to display
          a sample of fonts
        </p>
        <button onClick={closeModal} className="modal-btn">
          I accept it
        </button>
      </div>
    </>
  );
};

export default MyModal;
