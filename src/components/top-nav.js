import React from 'react';
import './top-nav.css';

export default class TopNav extends React.Component{
    onNewGame(event){
      event.preventDefault();
      if(this.props.onNewGame){
        this.props.onNewGame();
      }
    }
    onModal(event){
      event.preventDefault();
      if(this.props.onModal){
        this.props.onModal();
      }
    }

    render(){
      return(
      <nav>
             <ul className="clearfix">
              <li>
                   <a className="what" onClick={e => this.onModal(e)}>
                            What?
                    </a>
              </li>
               <li>
                        <a className="new" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                 </li>
          </ul>
      </nav>
    )}
}
