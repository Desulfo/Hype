import React, { useState } from 'react';

import './App.css';
import Info from './molecules/Info';
import StyledModal from './molecules/StyledModal';
import MainAddButton from './atoms/MainAddButton';
import ExtendedInfo from './molecules/ExtendedInfo';

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
      <Info />
      <ExtendedInfo />
      <Info />
      <MainAddButton openModal={openModal} />
      <StyledModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </main>
  );
}

export default App;
