import React, { useState } from 'react';
import OptionButton from './OptionButton';
import Feedback from './Feedback';
import sound1 from '../assets/audio/sound1.mp3';
import sound2 from '../assets/audio/sound2.mp3';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';

const GameManager = () => {
  const [currentSound, setCurrentSound] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');

  const sounds = [
    { audio: new Audio(sound1), correctImage: image1 },
    { audio: new Audio(sound2), correctImage: image2 },
  ];

  const startNewRound = () => {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const selectedSound = sounds[randomIndex];
    setCurrentSound(selectedSound);
    setCorrectAnswer(selectedSound.correctImage);
    selectedSound.audio.play();
  };

  const checkAnswer = (selectedImage) => {
    if (selectedImage === correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Try Again!');
    }
    setTimeout(() => {
      setFeedback('');
      startNewRound();
    }, 1500);
  };

  return (
    <div>
      <button onClick={startNewRound}>Play Sound</button>
      <div className="options">
        <OptionButton image={image1} onClick={() => checkAnswer(image1)} />
        <OptionButton image={image2} onClick={() => checkAnswer(image2)} />
      </div>
      <Feedback message={feedback} />
    </div>
  );
};

export default GameManager;
