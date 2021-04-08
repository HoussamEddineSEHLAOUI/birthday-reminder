
import './App.css';
import Pers from './pers.js';
import users from './Data';
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      users:users
    }


  }


  onClicClear(){
    console.log("clear all");
    this.setState(    {  users:[]  }      );

  }


  render (){
    return (
      <div className="App">
        <header className="App-header">
          <div className="panel">
            <h4 className="num">{this.state.users.length} Birthdays today</h4>
            <Pers personnes={this.state.users}/>
            <div className="button-pan">
              <button onClick={this.onClicClear}>Clear All</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
