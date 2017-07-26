import React from 'react';

import InfoModal from './info-modal';
import TopNav from './top-nav';

import './header.css';

export default class Header extends React.Component{
    constructor(props){
    super(props);
      this.state = {
        openCloseModal : false
      }
    }
    
    toggleModal(){
      this.setState({
        openCloseModal: !this.state.openCloseModal
      })
    }
  
    render(){
      let infoModal;
      if (this.state.openCloseModal){
        infoModal = <InfoModal onClose={()=>this.toggleModal()}/>
      }
      return(
      <header>
          <TopNav onNewGame={()=>this.props.onNewGame()} onModal={()=>this.toggleModal()}/>
            {infoModal}
          <h1> Hot or Cold </h1>
      </header>
)
    }
}