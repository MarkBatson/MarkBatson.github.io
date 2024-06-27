import { useState } from 'react';
import Picker from 'react-mobile-picker';
import './filter-picker.css';

export const FilterPicker = ({values, selected, setFilter, close}) => {

  const [pickerValue, setPickerValue] = useState({filterKey: selected});

  return (
    <>
      <div className="overlay" onClick={close}></div>
      <div className="picker-container">
        <div className="picker-button-container">
          <button className="picker-button cancel-button" onClick={() => setFilter(0)}>Clear</button>
          <button className="picker-button set-button" onClick={() => setFilter(pickerValue.filterKey)}>Set</button>
        </div>
        <Picker value={pickerValue} onChange={setPickerValue} wheelMode="normal" height="300">
          <Picker.Column name="filterKey">
              {values.map((option) => (
                <Picker.Item key={option.key} value={option.key}>
                  <div id={option.key} className={`${option.key === pickerValue.filterKey ? "picker-selected" : ""}`}>
                    {option.name}
                  </div>
                </Picker.Item>
              ))}
          </Picker.Column>
        </Picker>
      </div>
    </>
  )
}