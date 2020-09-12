import React from 'react';
import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Navb from "./components/nav";
import Unknown from './components/unknown';
import Fotr from "./components/foot";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
<Router>
  <Navb/>
  <Switch>
    <Route path="/" exact component= {Home } />
    <Route path="/contact" exact component={Contact } />
    <Route path="/about" exact component={About} />
<Route path='/**' exact component={Unknown}/>
  </Switch>
  <Fotr/>
</Router>
    </div>
  );
}

export default App;
