import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css'
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
