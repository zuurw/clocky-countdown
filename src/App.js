import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    var dt = new Date();

    // Actual date plus a day = 24 hrs later
    var month = dt.getMonth()+1;
    var day = dt.getDate()+1;
    var year = dt.getFullYear();
    var dateNow = month + '/' + day + '/' + year;
    this.state = {
      deadline: dateNow,
    };
  }

  changeDeadline() {
    this.setState({
      deadline: "5/14/2018",
    });
  }

  render() {
    return (
      <div className="All">
        <div className="App">
          <div className="App-title">
            Clocky Countdown Challenge to {this.state.deadline}
          </div>
          <p>Coming soon...</p>
          <div>
            <div className="Clock-days">Days</div>
            <div className="Clock-hours">Hours</div>
            <div className="Clock-minutes">Minutes</div>
            <div className="Clock-seconds">Seconds</div>
          </div>
          <div className="box">
            <div className="App-input">
              <input id="new" type="text" placeholder="New date"/>
              {/*--ES6 Anonymous function for no loops that could crash the app*/}
              <button class="icon" onClick={() => this.changeDeadline()}>
                <i class="fa fa-calendar"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
