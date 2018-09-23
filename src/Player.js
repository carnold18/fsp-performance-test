import React, { Component } from 'react';
import PlayerInfo from './PlayerInfo.js';
import PlayerDetails from './PlayerDetails.js';

class Player extends Component {

    

    render() {
      return (
        <div className="player">
          <PlayerInfo name={this.props.name} image={this.props.image} team_name={this.props.team_name} />
          <PlayerDetails ind_points={this.props.ind_points} total_points={this.props.total_points} />
        </div>
      )
    }
  }
  
  //Player.defaultProps = {}
  
  export default Player;