import React, { Component } from 'react';
import Room from './Room';

class Randomize extends Component {
  constructor(props) {
    super(props)
    this.state = {
        participants: [
            [
                "Ada Swach", 
                "Angelika Szarek", 
                "Asia Micherda", 
                "Dominika Fudala", 
                "Dominika Kabat", 
                "Justyna Gładysz", 
                "Justyna Burghardt", 
                "Katarzyna Hauffa",
                "Kinga Pieniawska", 
                "Klaudia Budzyńska", 
                "Małgosia Mikosz", 
                "Maria Kurpios", 
                "Monika Biały", 
                "Natalia Czajka"
            ], //14
            [
                "Janek Puchała", 
                "Jasiek Uss Wąsowicz", 
                "Krzysztof Pulak", 
                "Maciej Krajewski", 
                "Marcin Trzósło", 
                "Marek Trepkowski", 
                "Michał Kadzban", 
                "Patryk Janczur", 
                "Robert Szymański", 
                "Tomek Gajda", 
                "Waldek Świder", 
                "Wiktor Jurek", 
                "Jakub Bąk", 
                "Grzesiek Jędrzejczak", 
                "Filip Bujak", 
                "Dominik Bober", 
                "Dawid Obcowski", 
                "Antoni Janas"
            ] //18
        ],
        roomsContainer: []
    }    

    this.randomize = this.randomize.bind(this);
  }
  randomize() {
    class RoomClass {
      constructor(number, size) {
          this.number = number;
          this.size = size;
          this.inhabitants = [];
          this.gender = 0;
      }
  
      setGender(gender) {
          this.gender = gender;
      }
  
      getGender() {
          return this.gender;
      }
    }

    let Rooms = [
        new RoomClass('1', 2),
        new RoomClass('2', 2),
        new RoomClass('3', 4),
        new RoomClass('6', 8),
        new RoomClass('8', 6),
        new RoomClass('9', 4),
        new RoomClass('10', 6)
    ];

    let participants = JSON.parse(JSON.stringify(this.state.participants));

    console.log(participants);
    Rooms.sort((a, b) => (a.size < b.size) ? 1 : -1);

    for (let i = 0; i < Rooms.length; i++) {
        let x = Math.max(
            participants[0].length, 
            participants[1].length
        ) === participants[0].length ? 0 : 1;
        if (x === 0) {
            Rooms[i].setGender(0);
        }
        if (x === 1) {
            Rooms[i].setGender(1);
        }

        for (let j = 0; j < Rooms[i].size; j++) {


            let y = Math.floor(Math.random() * participants[x].length);
            if (participants[x].length > 0) {
                Rooms[i].inhabitants.push(participants[x][y]);
                participants[x].splice(y, 1);
            }
        }
    }

    for (let i = Rooms.length - 1; i >= 0; i--) {
        if (Rooms[i].inhabitants.length === 1) {

            for (let j = 0; j < Rooms.length; j++) {
                if ((Rooms[i].getGender() === Rooms[j].getGender()) && (Rooms[j].inhabitants.length > 2)) {
                    let person = Rooms[j].inhabitants[Rooms[j].inhabitants.length - 1];
                    Rooms[j].inhabitants.splice(Rooms[j].inhabitants.length - 1, 1);
                    Rooms[i].inhabitants.push(person);
                    break;
                }
            }
        }
    }

    for (let i = 0; i < 2; i++) {
        for (let j = Rooms.length - 1; j >= 0; j--) {
            if (Rooms[j].inhabitants.length < Rooms[j].size) {
                for (let k = Rooms.length - 1; k >= 0; k--) {
                    if (Rooms[k].size >= Rooms[j].inhabitants.length && Rooms[k].inhabitants.length === 0) {
                        Rooms[k].inhabitants = Rooms[k].inhabitants.concat(Rooms[j].inhabitants);
                        Rooms[j].inhabitants = [];
                    }
                }
            }
        }
    }

    console.log(Rooms);
    let array = [];
    Rooms.map( (room, i) => {
        array.push(
          <Room data={room} key={i} />
        )
      }
    )
    this.setState({
      roomsContainer: array
    })
  }
  
  render() {
    
    return (
      <div>
        <button onClick={this.randomize}>Losuj pokoje</button>
        {this.state.roomsContainer}
      </div>
    );
  }
}

export default Randomize;