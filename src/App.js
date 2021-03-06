import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </div>
    </BrowserRouter>
  );
}


export default App;