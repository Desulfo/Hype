import React from 'react';

import './Info.css';

function Info() {
  return (
    <section className="informationBox">
      <div className="purpleStripe"></div>
      <p>data</p>
      <button className="removeButton">
        <div className="minus"></div>
      </button>
    </section>
  );
}

export default Info;
