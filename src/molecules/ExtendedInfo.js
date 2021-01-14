import React from 'react';
import DeleteButton from '../atoms/DeleteButton';
import ExtraInfo from '../atoms/ExtraInfo';
import AddButton from '../atoms/AddButton';

import './ExtendedInfo.css';

function ExtendedInfo() {
  return (
    <section className="informationBox">
      <div className="purpleStripe"></div>
      <main>
        <section className="extendedInfoWraper">
          <div className="extendedInfo">
            <p className="mainInfo">Data</p>
          </div>
          <DeleteButton />
        </section>
        <ExtraInfo />
        <ExtraInfo />
        <AddButton />
      </main>
    </section>
  );
}

export default ExtendedInfo;
