import React, { Component } from 'react';
import './room.css';

class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {}    
}
  render() {
    return (
      <div>
        <div className="room">
          <p className="number">Pokój {this.props.data.number}</p>
          {this.props.data.inhabitants.map( (inhabitant, i) => {
              let name = inhabitant.split(' ');
              return <p key={i}>{name[0]} <span className="surname">{name[1]}</span></p>
            }
          )}
        </div>
      </div>
      
    );
  }
}



export default Room;