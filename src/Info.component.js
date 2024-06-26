import React, { useState } from 'react';
import './Info.css';
import {jedi, species} from "./data.js";

function Info( {index, setIndex} ) {
  return (
    <div className="info">
      <div className="icons">
        <img onClick={() => window.open(jedi[index].link, '_blank')} className="icon" src={process.env.PUBLIC_URL + '/images/fandom.svg'} />
        <img onClick={() => setIndex(-1)} className="icon" src={process.env.PUBLIC_URL + '/images/x.svg'} />
      </div>
      <p className="aurebesh-name">
        {jedi[index].name}
      </p>
      <h1 className="info-name">
        {jedi[index].name}
      </h1>
      <div className="data">
        <div className ="flex">
          <div className="stats-border">
            <h2>SPECIES</h2>
            <p>{jedi[index].species}</p>
          </div>
          <div>
            <h2>FIRST APPEARANCE</h2>
            <p>{jedi[index].appearanceDetailed}</p>
          </div>
        </div>
        <p className="description">{jedi[index].description}</p>
      </div>
    </div>
  );
}

export default Info;
