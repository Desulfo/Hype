import React from 'react';

import './ExtraInfo.css';
import DeleteButton from './DeleteButton';

function ExtraInfo() {
  return (
    <section className="extraInfo">
      <p className="moreInfo">Black</p>
      <DeleteButton />
    </section>
  );
}

export default ExtraInfo;
