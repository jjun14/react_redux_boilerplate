import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  render(){
    return(
      <div>
        <h1>React Template</h1>
        {this.props.children}
      </div>
    )
  }
}
