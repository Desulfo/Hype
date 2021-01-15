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
  const addData = (newTitle) => {
    const newData = [...data, 'test'];
    console.log({ new: newData });
    setData(newData);
    console.log({ data: data });
  };
  return (
    <main className="mainContent">
      <header className="header">
        <h2>People</h2>
      </header>
      {data.map((data, index) => {
        if (typeof data === 'string') {
          return <Info data={data} key={index} />;
        } else {
          return <ExtendedInfo data={data} key={index} />;
        }
      })}
      <MainAddButton openModal={openModal} clickHandle={addData} />
      <StyledModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        addAction={addAction}
      />
    </main>
  );
}

export default App;
