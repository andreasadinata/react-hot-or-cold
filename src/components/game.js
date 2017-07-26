import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      feedback: 'Make your guess!',
      guesses: [],
      value: Math.floor(Math.random()*100)+1
    };
  }
  newGame(){
    this.setState({
      feedback: 'Make your guess!',
      guesses: [],
      value: Math.floor(Math.random()*100)+1
    })
  }
  evaluateGuess(guess){
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({feedback:'Hey Input the correct number!!'});

      return;
    }
    const difference = Math.abs(this.state.value - guess)

    if (difference >= 50){

      this.setState({feedback: 'Woooaahhh, It is freezing (+/- 50 Up)'})
    }
    else if(difference >=25){

        this.setState({feedback: 'Ummm, It is kinda hot (+/- 25 Up)'})
    }
    else if(difference >=10){

        this.setState({feedback: 'Warm (+/- 10 Up)'})
    }
    else if(difference >=5){
        this.setState({feedback: 'You are Hot! (+/- 5 Up)'})
    }
    else if(difference >=1){
        this.setState({feedback: 'One more step (+/- 1 Up)'})
    }
    else{
      this.setState({feedback: 'GOT IT!!'})
    }

    this.setState({guesses:[...this.state.guesses,guess]});



}

  render() {
    return(
    <div>
        <Header onNewGame={()=>this.newGame()}/>
        <GuessSection feedback={this.state.feedback} onGuess={(guess)=>this.evaluateGuess(guess)}/>
        <GuessCount guesses = {this.state.guesses.length}/>
        <GuessList guesses = {this.state.guesses}/>
    </div>
    );
  }
}
