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
    console.log(difference);
    if (difference >= 50){
      console.log(difference);
      console.log("50");
      this.setState({feedback: 'Woooaahhh, It is freezing'})
    }
    else if(difference >=25){
      console.log("25");
      this.setState({feedback: 'Ummm, It is kinda hot'})
    }
    else if(difference >=10){
      console.log("10");
      this.setState({feedback: 'Warm'})
    }
    else if(difference >=5){
      this.setState({feedback: 'You are Hot!'})
    }
    else if(difference >=1){
      this.setState({feedback: 'One more step'})
    }
    else{
      this.setState({feedback: 'GOT IT!!'})
    }

    this.setState({guesses:[...this.state.guesses,guess]});
    
    
    
}
  
  render() {
    console.log(this.state.value);
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