import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import React, { Component } from 'react';
import Profile from './Components/Profile';
import QLinks from './Components/QLinks';
import Chart from './Components/Chart';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
        <Profile/>
        <QLinks/>
        <Chart/>
    </div>
    </BrowserRouter>
  
  
  );
}
}

export default App;

