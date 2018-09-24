import React, { Component } from 'react';
import AllPlayers from './AllPlayers.js'
//import Filters from './Filters.js'
import players from './players.js'
import './App.css';



class App extends Component {
  render(){
    return(
      <div>
        <AllPlayers players={players} />
      </div>
    )
  }

}

export default App;
