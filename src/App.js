import React, { useState } from 'react';
import Popup from './popup';
import './styles.css';


const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [inputText, setInputText] = useState('');
  const [popupText, setPopupText] = useState('');

  const togglePopup = () => {
    if (inputText.trim() !== '') {
      setPopupText(inputText);
      setShowPopup(!showPopup);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="app">
      <h1>React Portal Popup Example</h1>
      <div className="input-container">
        <input type="text" value={inputText} onChange={handleInputChange} placeholder="Enter text" />
        <button onClick={togglePopup}>Open Popup</button>
      </div>
      {showPopup && <Popup onClose={togglePopup} text={popupText} />}
    </div>
  );
};

export default App;
