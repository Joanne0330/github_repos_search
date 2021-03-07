import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={Search}/>
      </div>

    </Router>
  );
}

export default App;
