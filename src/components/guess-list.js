import React from 'react';
import './guess-list.css';

export default function GuessList (props){
  const guesses = props.guesses.map((value,index)=>(
    <li key={index}>
            {value}
        </li>
  ))
  return (
     <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
  )
}