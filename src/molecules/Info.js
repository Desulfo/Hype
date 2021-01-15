import React from 'react';
import DeleteButton from '../atoms/DeleteButton';

import './Info.css';

function Info({ data }) {
  return (
    <section className="informationBox">
      <div className="purpleStripe"></div>
      <p className="info">{data}</p>
      <DeleteButton />
    </section>
  );
}

export default Info;
