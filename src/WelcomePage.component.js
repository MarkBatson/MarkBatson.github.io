import React, { useState } from 'react';
import './Welcome.css';

function Welcome( {close} ) {
  return (
    <div className="welcome">
      <div className="top">
        <h1>Welcome to the Jedi Archives</h1>
        <button onClick={close}>Continue</button>
      </div>
      <img className="welcome-image" src={process.env.PUBLIC_URL + '/images/Jedi_Archives.png'}/>
    </div>
  );
}

export default Welcome;
