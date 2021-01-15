import React, { useState } from 'react';
import Modal from 'react-modal';

import './StyledModal.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
  },
};

Modal.setAppElement('#root');

function StyledModal({ closeModal, modalIsOpen, addAction }) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddButton = (e) => {
    e.preventDefault();
    addAction(inputValue);
    setInputValue('');
    closeModal();
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <button className="closeStyles" onClick={closeModal}>
        X
      </button>
      <form>
        <input
          onChange={handleInputChange}
          value={inputValue}
          type="text"
          placeholder="Your data"
        />
        <button
          onClick={handleAddButton}
          className="submitButton"
          type="submit"
        >
          Add
        </button>
      </form>
    </Modal>
  );
}

export default StyledModal;
