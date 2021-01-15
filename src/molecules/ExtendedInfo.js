import React from 'react';
import DeleteButton from '../atoms/DeleteButton';
import ExtraInfo from '../atoms/ExtraInfo';
import AddButton from '../atoms/AddButton';

import './ExtendedInfo.css';

function ExtendedInfo({ information, deleteData, openModal }) {
  const handleAddButtonClick = () => {
    openModal(true);
  };
  return (
    <section className="informationBox">
      <div className="purpleStripe"></div>
      <main>
        <section className="extendedInfoWraper">
          <div className="extendedInfo">
            <p className="mainInfo">{information.title}</p>
          </div>
          <DeleteButton information={information} deleteData={deleteData} />
        </section>
        {information.subtitles.map((subtitle, index) => (
          <ExtraInfo
            subtitle={subtitle}
            key={10 + index}
            deleteData={deleteData}
          />
        ))}
        <AddButton openModal={handleAddButtonClick} />
      </main>
    </section>
  );
}

export default ExtendedInfo;
