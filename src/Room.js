import React, { Component } from 'react';

class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {}    
}
  render() {
    return (
      <div>
        <p>numer: {this.props.data.number}</p>
        <p>ilość osób: {this.props.data.size}</p>
        {this.props.data.inhabitants.map( (inhabitant, i) =>
            <p key={i}>{inhabitant}</p>
        )}
      </div>
    );
  }
}



export default Room;