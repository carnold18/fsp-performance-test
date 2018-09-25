import React, { Component } from 'react';
import PlayerInfo from './PlayerInfo.js';
import PlayerDetails from './PlayerDetails.js';

class Player extends Component {

    state = {
        showDetails: false
    }

    handleToggle = () => {
      this.setState( { showDetails: !this.state.showDetails })
    }

    render() {
      return (
        <div className="player" onClick={this.handleToggle}>
          <PlayerInfo name={this.props.name} image={this.props.image} team_name={this.props.team_name} />
          { this.state.showDetails ?
            <div>
              <PlayerDetails ind_points={this.props.ind_points} total_points={this.props.total_points} />
            </div>
          : null}
        </div>
      )
    }
  }


  export default Player;
