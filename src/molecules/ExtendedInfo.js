import React from 'react';
import DeleteButton from '../atoms/DeleteButton';
import ExtraInfo from '../atoms/ExtraInfo';
import AddButton from '../atoms/AddButton';

import './ExtendedInfo.css';

function ExtendedInfo({ data }) {
  return (
    <section className="informationBox">
      <div className="purpleStripe"></div>
      <main>
        <section className="extendedInfoWraper">
          <div className="extendedInfo">
            <p className="mainInfo">{data.title}</p>
          </div>
          <DeleteButton />
        </section>
        {data.subtitles.map((subtitle, index) => (
          <ExtraInfo subtitle={subtitle} key={10 + index} />
        ))}
        <AddButton />
      </main>
    </section>
  );
}

export default ExtendedInfo;
