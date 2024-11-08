import React, { useState } from 'react';
import Survey from './Survey';
import './App.css';

const App = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  const pageChange = () => {
    setShowSurvey(true); 
  };

  return (
    <div className="app-container">
      {showSurvey ? (
        <Survey />
      ) : (
        <div className="content">
          <h1>Do You Want To Know Your Preferences!</h1>
          <button onClick={pageChange}>Click here to start</button>
        </div>
      )}
    </div>
  );
};

export default App;
