import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Main from "./components/Main"
import City from "./components/City"


const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Main}/>
      <Route path="/city/:cityId" component={City}/>
    </Router>
  );
}

export default App;
