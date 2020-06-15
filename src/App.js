import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <Container>
      <Switch>
        {/* <Route path='/city/:cityId' component={City}/> */}
        <Route exact path='/' component={Main}/>
        <Route path="/city" component={City}/>
      </Switch>
    </Container>
  </Router>
  );
}

export default App;
