import React, { useState } from 'react';
import './App.css';
import Modal from 'react-modal';

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
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <main className="mainContent">
      <header className="header">
        <h2>People</h2>
      </header>

      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button className="closeStyles" onClick={closeModal}>
          X
        </button>
        <form>
          <input type="text" placeholder="Your data" />
          <button className="submitButton" type="submit">
            Add
          </button>
        </form>
      </Modal>
    </main>
  );
}

export default App;
