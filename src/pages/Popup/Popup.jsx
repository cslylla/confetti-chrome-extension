import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

const Popup = () => {
  const handlePopConfetti = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab?.id) {
        chrome.scripting.executeScript(
          {
            target: { tabId: activeTab.id },
            files: ['injectConfetti.bundle.js'],
          },
          () => {
            if (chrome.runtime.lastError) {
              console.warn(
                'Confetti: Open a regular webpage (http/https) to use confetti.'
              );
            }
          }
        );
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Confetti Extension</p>
        <button className="confetti-btn" onClick={handlePopConfetti}>
          Pop confetti
        </button>
      </header>
    </div>
  );
};

export default Popup;
