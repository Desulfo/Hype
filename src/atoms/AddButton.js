import React from 'react';

function AddButton({ openModal }) {
  return (
    <button onClick={openModal} className="addButton addButtonMargin">
      <div className="minus"></div>
      <div className="minus vertical"></div>
    </button>
  );
}

export default AddButton;
