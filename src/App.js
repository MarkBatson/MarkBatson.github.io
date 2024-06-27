import React, { useState } from 'react';
import './App.css';
import {jedi, republic} from "./data.js";
import {species, appearanceKey} from "./species-data.js"
import Info from './Info.component';
import WelcomePage from './WelcomePage.component';

function App() {
  const [selected, setSelected] = useState('SPECIES');
  const [info, setInfo] = useState(-1);
  const [welcome, setWelcome] = useState(false);
  const [filter, setFilter] = useState(-1);
  const [showFilterList, setShowFilterList] = useState(false);
  const [search, setSearch] = useState("");
  const [obscurityLevel, setObscurityLevel] = useState(5);
  // process.env.PUBLIC_URL + '/images/species/' + species.img

  const redirect = (link) => {
    window.open(link, '_blank');
  }

  const filterSpecies = (list) => {
    if (filter > -1) {
      list = list.filter(species => species.appearance === filter);
    }
    if (search.length > -1) {
      list = list.filter(species => species.name.startsWith(search.toUpperCase()));
    }
    list = list.filter(species => species.obscurity <= obscurityLevel);
    return list;
  }

  const filterJedi = (list) => {
    if (filter > -1) {
      list = list.filter(jedi => jedi.appearance === filter);
    }
    if (search.length > -1) {
      list = list.filter(jedi => jedi.name.startsWith(search.toUpperCase()));
    }
    return list;
  }

  const speciesList = () => {
    return (
      <>
        {
          filterSpecies(species).map((species, index) => (
          <div>
            <div className="list-item fade-in" style={{animationDelay: index*.05 + "s"}} onClick={() => redirect(species.link)}>
              <img src={species.img} className="image"/>
              <div className="name">{species.name}</div>
            </div>
          </div>
        ))}
      </>
    )
  };

  const jediList = () => {
    return (
      <>
        {filterJedi(jedi).map((jedi, index) => (
          <div onClick={() => setInfo(index)}>
            <div className="list-item fade-in" style={{animationDelay: index*.05 + "s"}}>
              <img src={process.env.PUBLIC_URL + '/images/jedi/' + jedi.img} className="image"/>
              <div className="name">{jedi.name}</div>
            </div>
          </div>
        ))}
      </>
    )
  };

  const republicList = () => {
    return (
      <>
        {republic.map((vehicle, index) => (
          <div onClick={() => setInfo(index)}>
            <div className="list-item fade-in" style={{animationDelay: index*.05 + "s"}}>
              <img src={process.env.PUBLIC_URL + '/images/republic-vehicles/' + vehicle.img} className="image"/>
              <div className="name">{vehicle.name}</div>
            </div>
          </div>
        ))}
      </>
    )
  };

  const selectPage = (page) => {
    setSelected(page);
    setInfo(-1);
    setShowFilterList(false);
    setFilter(-1);
  };

  const applyFilter = (filter) => {
    setFilter(filter);
    setShowFilterList(false);
  };

  const multiPageHeader = () => {
    return (
      <div className="header">
        <span title="JEDI" className={(selected === 'JEDI') ? "page selected" : "page"} onClick={() => selectPage('JEDI')}>
          JEDI
        </span>
        <span title="SPECIES" className={(selected === 'SPECIES') ? "page selected" : "page"} onClick={() => selectPage('SPECIES')}>
          SPECIES
        </span>
        <span title="REPUBLIC VEHICLES" className={(selected === 'REPUBLIC VEHICLES') ? "page selected" : "page"} onClick={() => selectPage('REPUBLIC VEHICLES')}>
          REPUBLIC VEHICLES
        </span>
      </div>
    );
  }

  const filterSvg = () => {
    return (
      <svg height="20" viewBox="0 0 1792 1792" width="20" xmlns="http://www.w3.org/2000/svg" fill="white">
        <path d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z"/>
      </svg>
    );
  }

  return (
    <div>
      <div className="header">
        <span title="GALACTIC COMPENDIUM" className="page">
          GALACTIC COMPENDIUM
        </span>
      </div>

      {welcome && <WelcomePage close={() => setWelcome(false)} />}

      <div>
        <div className="filter-button" onClick={() => setShowFilterList(!showFilterList)}>
          {filterSvg()}
        </div>
        {(showFilterList &&
          <div className="filter-list">
            {appearanceKey.map((appearanceKey) => (
              <div className={`filter-option ${(filter === appearanceKey.key) ? " filter-option-selected" : ""}`} onClick={() => applyFilter(appearanceKey.key)}>
                {appearanceKey.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="filters">
        <input className="search-bar" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
        <div className="obscurity-filter">
          <div>Well Known</div>
          <input className="obscurity-level" type="range" min="1" max="6" value={obscurityLevel} onChange={(e) => setObscurityLevel(e.target.value)}/>
          <div>Obscure</div>
        </div>
      </div>

      <div className="list">
        {(selected === 'JEDI' && !welcome) && jediList()}
        {(selected === 'SPECIES' && !welcome) && speciesList()}
        {(selected === 'REPUBLIC VEHICLES' && !welcome) && republicList()}
      </div>
      {(info > -1) && (selected === 'JEDI') &&
        <Info index={info} setIndex={setInfo} />
      }
    </div>
  );
}

export default App;
