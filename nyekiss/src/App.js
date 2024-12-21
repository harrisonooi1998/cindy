import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure Bootstrap is imported
import './App.css';  // If you have custom CSS
import cutePicture from './images/pochacco-sanrio.gif';
import pochaco from './images/yellow-pochacco.gif'

// DISPLAY ON THE FRONT PAGE OF BEARS HUGGING 
function BearHug() {
  return <img src={cutePicture} alt="bear_hugging" className="bearHug mb-4" />;
}

function CuteMessage() {
  return <h1 className="cute-message mb-4">Will you be my New Year's Kiss?</h1>;
}

function YesNoButtons({ onClickYes, onClickNo, noButtonText, yesButtonSize }) {
  return (
    <div className="d-flex gap-3">
      <button 
        className="yes-button" 
        style={{ transform: `scale(${yesButtonSize})` }} 
        onClick={onClickYes}>
        Yes
      </button>
      <button className="no-button" onClick={onClickNo}>
        {noButtonText}
      </button>
    </div>
  );
}

function App() {
  const [isKissAccepted, setIsKissAccepted] = useState(null);  // null = no action, true = yes, false = no
  const [noButtonText, setNoButtonText] = useState('No');  // Track "No" button text
  const [yesButtonSize, setYesButtonSize] = useState(1);  // Start with normal size for "Yes" button (scale = 1)

  // Dictionary of different "No" responses
  const noResponses = [
    'Are you sure?',
    'Can you change your mind?',
    'Think again...',
    'Maybe later?',
    'I’m not convinced...',
    'Try harder! 😜',
    'Is this your final answer?',
    'Do you really mean it?'
  ];

  // Function for when "Yes" is clicked
  const handleYesClick = () => {
    acceptKiss();
    growYesButton();
  };

  // Function for when "No" is clicked
  const handleNoClick = () => {
    randomizeNoResponse();  // Recursively randomize the "No" button text
  };

  // Function for accepting the kiss (yes response)
  const acceptKiss = () => {
    setIsKissAccepted(true);  // User clicked "Yes"
  };

  // Function to progressively increase the size of the "Yes" button
  const growYesButton = () => {
    setYesButtonSize(prevSize => prevSize + 0.1);  // Increase scale by 0.1 each time (smooth scaling effect)
  };

  // Function to randomize the "No" button text recursively
  const randomizeNoResponse = () => {
    const randomIndex = Math.floor(Math.random() * noResponses.length);  // Pick a random index
    setNoButtonText(noResponses[randomIndex]);  // Set the "No" button text to a random phrase
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 flex-column">
      {/* Show content only if the kiss is not accepted */}
      {isKissAccepted === null && (
        <>
          <BearHug />
          <CuteMessage />
          <YesNoButtons 
            onClickYes={handleYesClick} 
            onClickNo={handleNoClick} 
            noButtonText={noButtonText} 
            yesButtonSize={yesButtonSize}
          />
        </>
      )}

      {/* Show new content once the kiss is accepted */}
      {isKissAccepted && (
        <div>
          <h1 className="cute-message mb-4">Yay! Happy New Year! 🎉</h1>
          <p>I love you so much pookie bear!! </p>
          <img src={pochaco} alt="Happy New Year" />
        </div>
      )}
    </div>
  );
}

export default App;