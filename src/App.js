import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Header from './Components/Header';
import Section from './Components/Section';
import { DataProvider } from './Components/Context';

class App extends Component {
  render() {
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
            
          </Router>
        </div>
      </DataProvider>
    )
  }
}
export default App
