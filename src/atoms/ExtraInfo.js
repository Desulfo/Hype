import React from 'react';

import './ExtraInfo.css';
import DeleteButton from './DeleteButton';

function ExtraInfo({ subtitle }) {
  return (
    <section className="extraInfo">
      <p className="moreInfo">{subtitle}</p>
      <DeleteButton />
    </section>
  );
}

export default ExtraInfo;
