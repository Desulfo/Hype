import React from 'react';

import './ExtraInfo.css';
import DeleteButton from './DeleteButton';

function ExtraInfo({ subtitle, deleteData }) {
  return (
    <section className="extraInfo decorationLine">
      <p className="moreInfo">{subtitle}</p>
      <DeleteButton
        deleteData={deleteData}
        information={subtitle}
        nested={true}
      />
    </section>
  );
}

export default ExtraInfo;
