import React, { Component } from 'react';

class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inhabitants: [],
      gender: 0,
    }
    //this.number = number;
    //this.size = size;
    
}

  setGender(gender) {
      this.gender = gender;
  }

  getGender() {
      return this.gender;
  }

  randomize() {
    class Room {

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

    let Rooms = [];

    Rooms.push(new Room('1', 2));
    
    Rooms.push(new Room('2', 2));
    Rooms.push(new Room('3', 4));
    Rooms.push(new Room('6', 8));
    Rooms.push(new Room('8', 6));
    Rooms.push(new Room('9', 4));
    Rooms.push(new Room('10', 6));




    let participants = [
        ["Ada Swach", "Angelika Szarek", "Asia Micherda", "Dominika Fudala", "Dominika Kabat", "Justyna Gładysz", "Justyna Burghardt", "Katarzyna Hauffa", "Kinga Pieniawska", "Klaudia Budzyńska", "Małgosia Mikosz", "Maria Kurpios", "Monika Biały", "Natalia Czajka"], //14
        ["Janek Puchała", "Jasiek Uss Wąsowicz", "Krzysztof Pulak", "Maciej Krajewski", "Marcin Trzósło", "Marek Trepkowski", "Michał Kadzban", "Patryk Janczur", "Robert Szymański", "Tomek Gajda", "Waldek Świder", "Wiktor Jurek", "Jakub Bąk", "Grzesiek Jędrzejczak", "Filip Bujak", "Dominik Bober ", "Dawid Obcowski", "Antoni Janas"] //18
    ];

    Rooms.sort((a, b) => (a.size < b.size) ? 1 : -1);

    for (let i = 0; i < Rooms.length; i++) {

        let x = Math.max(participants[0].length, participants[1].length) === participants[0].length ? 0 : 1;
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
  }
  
  render() {
    return (
      <div>
        {this.randomize()}
      </div>
    );
  }
}



export default Room;