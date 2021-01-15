import React from 'react';

function AddButton({ openModal }) {
  return (
    <button onClick={openModal} className="addButton addButton__small">
      <div className="minus"></div>
      <div className="minus vertical"></div>
    </button>
  );
}

export default AddButton;
