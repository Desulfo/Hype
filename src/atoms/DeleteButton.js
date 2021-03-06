import React from 'react';

function DeleteButton({ deleteData, information, nested }) {
  const handleDelete = () => {
    deleteData(information, nested);
  };
  return (
    <button onClick={handleDelete} className="removeButton">
      <div className="minus"></div>
    </button>
  );
}

export default DeleteButton;
