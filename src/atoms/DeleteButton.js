import React from 'react';

import './DeleteButton.css';

function DeleteButton({ deleteData, information }) {
  const handleDelete = () => {
    deleteData(information);
  };
  return (
    <button onClick={handleDelete} className="removeButton">
      <div className="minus"></div>
    </button>
  );
}

export default DeleteButton;
