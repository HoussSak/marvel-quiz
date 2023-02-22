
import React, { Component } from 'react'

export class Quiz extends Component {
  render() {

    const {pseudo} = this.props.userData;
    return (
      <div>
        <h2>Pseudo: {pseudo}</h2>
        
      </div>
    )
  }
}

export default Quiz

