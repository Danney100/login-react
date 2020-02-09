import React, { Component } from 'react';
import Popup from './popupPhoneNumber';


class App extends React.Component {

  constructor(props){
  super(props);
  this.state = { showPopup: false };
  // this.togglePopup = this.togglePopup.bind(this);  
  }

  togglePopup() {
    this.setState({
       showPopup: !this.state.showPopup
    });
  }
  
  render() {
      return (
        <div className='app'>
          <h1>hihi</h1>
          <button onClick={this.togglePopup.bind(this)}>show popup</button>
          <button onClick={() => {alert('woooooooot?');}}>try me when popup is open</button>
          
          {this.state.showPopup ? 
            <Popup
              text='Close Me'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      );
    }
  
};

export default App;