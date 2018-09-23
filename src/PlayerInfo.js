import React, { Component } from 'react';

class PlayerInfo extends Component {

  render() {
    return (
      <div className="player-info">
        <h2 className="name">Player: {this.props.name}</h2>
        <h3 className="team-name">Team: {this.props.team_name}</h3>
        <img src={this.props.image} alt=""></img>
      </div>
    )
  }
}

export default PlayerInfo;