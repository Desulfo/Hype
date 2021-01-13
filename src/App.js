import React, { useState } from 'react';
import Modal from 'react-modal';

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
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>X</button>
        <form>
          <input />
        </form>
      </Modal>
    </div>
  );
}

export default App;
