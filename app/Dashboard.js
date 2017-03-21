import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Link className="link" to="/greeting">Greeting</Link>
        <Link className="link" to="/goodbye">Goodbye</Link>
        <Link className="link" to="/custom">Display Custom</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Dashboard;
