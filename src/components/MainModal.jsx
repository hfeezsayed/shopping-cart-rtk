import React, { useState } from "react";
import MyModal from "./MyModal";

const MainModal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="modal-btn"
        style={{ marginLeft: "2rem", marginTop: "2rem" }}
      >
        Open Modal
      </button>
      <div style={{ padding: "2rem" }}>
        <p style={{ marginBottom: "1rem" }}>
          dummy data is benign information that does not contain any useful
          data, but serves to reserve space where real data is nominally
          present. Dummy data can be used as a placeholder for both testing and
          operational purposes. For testing, dummy data can also be used as
          stubs or pad to avoid software testing issues by ensuring that all
          variables and data fields are occupied.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          dummy data is benign information that does not contain any useful
          data, but serves to reserve space where real data is nominally
          present. Dummy data can be used as a placeholder for both testing and
          operational purposes. For testing, dummy data can also be used as
          stubs or pad to avoid software testing issues by ensuring that all
          variables and data fields are occupied.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          dummy data is benign information that does not contain any useful
          data, but serves to reserve space where real data is nominally
          present. Dummy data can be used as a placeholder for both testing and
          operational purposes. For testing, dummy data can also be used as
          stubs or pad to avoid software testing issues by ensuring that all
          variables and data fields are occupied.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          dummy data is benign information that does not contain any useful
          data, but serves to reserve space where real data is nominally
          present. Dummy data can be used as a placeholder for both testing and
          operational purposes. For testing, dummy data can also be used as
          stubs or pad to avoid software testing issues by ensuring that all
          variables and data fields are occupied.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          dummy data is benign information that does not contain any useful
          data, but serves to reserve space where real data is nominally
          present. Dummy data can be used as a placeholder for both testing and
          operational purposes. For testing, dummy data can also be used as
          stubs or pad to avoid software testing issues by ensuring that all
          variables and data fields are occupied.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          dummy data is benign information that does not contain any useful
          data, but serves to reserve space where real data is nominally
          present. Dummy data can be used as a placeholder for both testing and
          operational purposes. For testing, dummy data can also be used as
          stubs or pad to avoid software testing issues by ensuring that all
          variables and data fields are occupied.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          dummy data is benign information that does not contain any useful
          data, but serves to reserve space where real data is nominally
          present. Dummy data can be used as a placeholder for both testing and
          operational purposes. For testing, dummy data can also be used as
          stubs or pad to avoid software testing issues by ensuring that all
          variables and data fields are occupied.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          dummy data is benign information that does not contain any useful
          data, but serves to reserve space where real data is nominally
          present. Dummy data can be used as a placeholder for both testing and
          operational purposes. For testing, dummy data can also be used as
          stubs or pad to avoid software testing issues by ensuring that all
          variables and data fields are occupied.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          dummy data is benign information that does not contain any useful
          data, but serves to reserve space where real data is nominally
          present. Dummy data can be used as a placeholder for both testing and
          operational purposes. For testing, dummy data can also be used as
          stubs or pad to avoid software testing issues by ensuring that all
          variables and data fields are occupied.
        </p>
      </div>
      {showModal && <MyModal closeModal={closeModal} />}
    </>
  );
};

export default MainModal;
