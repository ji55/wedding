import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Story from './components/Story';
import './App.css'


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/story">
          <Story />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
