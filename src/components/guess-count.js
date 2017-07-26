import React from 'react';
import './guess-count.css';

export default function GuessCount (props){
  return(
    <div id="count">
      Guesses #<span>{props.count}</span>
    </div>
  )
}
