import React, { useState } from 'react';

import './App.css';
import Info from './molecules/Info';
import StyledModal from './molecules/StyledModal';
import MainAddButton from './atoms/MainAddButton';
import ExtendedInfo from './molecules/ExtendedInfo';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isNested, setIsNested] = useState(false);
  const [data, setData] = useState([
    'Age 40+',
    { title: 'Ethnicity', subtitles: ['Black', 'Hispanic'] },
    'Income yearly 45k USD+',
  ]);
  const handleAddButtonClick = () => {
    openModal(false);
  };
  function openModal(nested = false) {
    console.log(nested);
    setIsNested(nested);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const addAction = (text) => {
    console.log('to jak:', isNested);
    if (!isNested) {
      console.log('jest');
      const newData = [...data, text];
      setData(newData);
    } else {
      console.log('nie jest');
      const currentData = [...data];
      const objectInData = data.filter((value) => typeof value === 'object')[0];
      const indexOfObject = data.indexOf(objectInData);
      objectInData.subtitles.push(text);
      currentData[indexOfObject] = objectInData;
      console.log(currentData);
      setData(currentData);
    }
  };
  const deleteData = (information, nested = false) => {
    if (!nested) {
      const newData = data.filter((value) => value !== information);
      setData(newData);
    } else {
      const currentData = [...data];
      const objectInData = data.filter((value) => typeof value === 'object')[0];
      const indexOfObject = data.indexOf(objectInData);
      objectInData.subtitles = objectInData.subtitles.filter(
        (value) => value !== information
      );
      currentData[indexOfObject] = objectInData;
      setData(currentData);
    }
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
            openModal={openModal}
            deleteData={deleteData}
            information={information}
            key={index}
          />
        );
      })}
      <MainAddButton openModal={handleAddButtonClick} />
      <StyledModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        addAction={addAction}
      />
    </main>
  );
}

export default App;
