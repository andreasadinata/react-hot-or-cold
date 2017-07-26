import React from 'react';
import './guess-count.css';

export default function GuessCount (props){
  return(
    <div>
      "Guesses #" {props.guesses}
    </div>
  )
}