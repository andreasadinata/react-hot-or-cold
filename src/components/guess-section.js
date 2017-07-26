import React from 'react';
import './guess-section.css';

import GuessForm from './guess-form';

export default function GuessSection(props){
  return(
    <div>
      <h2 id="feedback">{props.feedback}</h2>
      <GuessForm onGuess={props.onGuess}/>
    </div>
  )
}