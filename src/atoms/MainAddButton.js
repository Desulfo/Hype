import React from 'react';

import './MainAddButton.css';

function MainAddButton({ openModal, clickHandle }) {
  return (
    <section className="addSection">
      <button onClick={clickHandle} className="backgroundButton">
        <main className="addButton mainAdd">
          <div className="line"></div>
          <div className="line vertical"></div>
        </main>
      </button>
    </section>
  );
}

export default MainAddButton;
