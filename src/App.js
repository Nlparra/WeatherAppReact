import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from "./components/Main"
import City from "./components/City"

const App = () => {
  return (
    <Router>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path="/city">
          <City />
      </Route>
    </Router>
  );
}

export default App;
