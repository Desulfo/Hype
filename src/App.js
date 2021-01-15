import React, { useState } from 'react';

import './App.css';
import Info from './molecules/Info';
import StyledModal from './molecules/StyledModal';
import MainAddButton from './atoms/MainAddButton';
import ExtendedInfo from './molecules/ExtendedInfo';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([
    'Age 40+',
    { title: 'Ethnicity', subtitles: ['Black', 'Hispanic'] },
    'Income yearly 45k USD+',
  ]);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const addAction = (text) => {
    const newData = [...data, text];
    setData(newData);
  };
  const deleteData = (information) => {
    const newData = data.filter((value) => value !== information);
    console.log(information, newData);
    setData(newData);
  };
  return (
    <main className="mainContent">
      <header className="header">
        <h2>People</h2>
      </header>
      {data.map((information, index) => {
        return typeof information === 'string' ? (
          <Info deleteData={deleteData} information={information} key={index} />
        ) : (
          <ExtendedInfo
            deleteData={deleteData}
            information={information}
            key={index}
          />
        );
      })}
      <MainAddButton openModal={openModal} />
      <StyledModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        addAction={addAction}
      />
    </main>
  );
}

export default App;
