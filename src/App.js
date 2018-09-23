import React, { Component } from 'react';
import Player from './Player.js'
import players from './players.js'
import './App.css';

class App extends Component {

  generatePlayers = () => {
    return players.map((player) =>
      <Player 
      team_name={player.team_name}
      name={player.name}
      image={player.image}
      ind_points={player.ind_points}
      total_points={player.total_points}
      />
    );
  }

  render() {
    return (
      <div id="player-list">
        {this.generatePlayers()}
      </div>
    )
  }

}

export default App;
