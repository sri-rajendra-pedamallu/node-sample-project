import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeList from  './components/EmployeeList';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <EmployeeList/>
      </div>
    );
  }
}

export default App;
