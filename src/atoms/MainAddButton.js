import React from 'react';

function MainAddButton({ openModal }) {
  return (
    <section className="addSection">
      <button onClick={openModal} className="backgroundButton">
        <main className="addButton mainAdd">
          <div className="line"></div>
          <div className="line vertical"></div>
        </main>
      </button>
    </section>
  );
}

export default MainAddButton;
