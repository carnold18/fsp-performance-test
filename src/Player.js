import React, { Component } from 'react';
import PlayerInfo from './PlayerInfo.js';
import PlayerDetails from './PlayerDetails.js';

class Player extends Component {

    state = {
        infoState: false
    }


    render() {

      const { infoState } = this.state

      const displayDetails = () => {
        this.setState({ 
            infoState: !this.state.infoState })
        }

      return (
        <div className="ui card">
            <div className="content">
                <PlayerInfo name={this.props.name} image={this.props.image} team_name={this.props.team_name} />
                <button onClick={displayDetails}>Player Stats!</button>
                {infoState ? (
                    <div>
                    <PlayerDetails ind_points={this.props.ind_points} total_points={this.props.total_points} />
                    </div>
                ) : null}
            </div>
        </div>
      )
    }
  }
  
  //Player.defaultProps = {}
  
  export default Player;