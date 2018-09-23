import React, { Component } from 'react';

class PlayerDetails extends Component {

    getStats = () => {
        if (this.props.ind_points < this.props.total_points) {
            return (
                <div>
                    <p>Player Points: {(this.props.ind_points)}</p>
                    <p>Percentage of Game Points: {Math.round((this.props.ind_points)/(this.props.total_points)*100,2)}%</p>
                </div>
            )
        }
        else {
            return (<p>Error Loading Player Stats</p>)
        }
    }
        
      render() {
        return (
          <div className="player-details">
            <span /> 
                { this.getStats() }
            <span />
          </div>
        )
      }
}

export default PlayerDetails;