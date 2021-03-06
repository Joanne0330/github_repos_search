import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import RepoDetails from './components/RepoDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Search /> */}
        <Route exact path='/' component={Search}/>
        <Route path='/details/:id' component={RepoDetails}/>
      </div>

    </Router>
  );
}

export default App;
