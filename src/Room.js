import React, { Component } from 'react';
import './room.css';

class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {}    
}
  render() {
    return (
      <div className="room">
        <p className="number">numer {this.props.data.number}</p>
        {this.props.data.inhabitants.map( (inhabitant, i) =>
            <p key={i}>{inhabitant}</p>
        )}
      </div>
    );
  }
}



export default Room;