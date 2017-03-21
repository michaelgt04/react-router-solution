import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Greeting from './Greeting'
import Goodbye from './Goodbye'
import Dashboard from './Dashboard'
import CustomGreeting from './CustomGreeting'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={Dashboard} >
          <Route path='greeting' component={Greeting} />
          <Route path='goodbye' component={Goodbye} />
          <Route path='custom' component={CustomGreeting} />
        </Route>
      </Router>
    )
  }
}

export default App;
