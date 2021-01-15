import React from 'react';

import DeleteButton from '../atoms/DeleteButton';

function Info({ information, deleteData }) {
  return (
    <section className="informationBox decorationLine">
      <div className="purpleStripe"></div>
      <p className="info">{information}</p>
      <DeleteButton deleteData={deleteData} information={information} />
    </section>
  );
}

export default Info;
