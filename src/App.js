import React, { Component } from 'react';
// import {Route, Switch} from 'react-router-dom';
// TODO: install npm react-router-dom
import './App.css';
import Header from '../src/components/Header.js';
import Home from '../src/components/Home.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
