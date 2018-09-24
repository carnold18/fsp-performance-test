import React, { Component } from 'react';
import Player from './Player.js';
import Sorters from './Sorters.js'
import Filters from './Filters.js'

class AllPlayers extends Component {

    state = {
        sortBy: 'Name',
        filterBy: 'None'
    }

    onSortChange = (sortBy) => {
        this.setState({ sortBy })
    }

    onFilterChange = (filterBy) => {
        this.setState({ filterBy })
    }

    getPlayers = () => {
        let resultingPlayers = [ ...this.props.players ]
        // if(this.state.sortBy == 'None'){
        //     resultingPlayers = this.generateNormalPlayerView()
        //   }
        if(this.state.sortBy === 'Name'){
            resultingPlayers = resultingPlayers.sort(Sorters.byName)
        }
        if(this.state.sortBy === 'PlayerPoints'){
            resultingPlayers = resultingPlayers.sort(Sorters.byWeight)
        }
        return resultingPlayers
    }

    render(){
        let resultingPlayers = this.getPlayers()
        return (
            <div>
                <Filters onSortChange={this.onSortChange}  />
                {resultingPlayers.length ? this.renderPlayers(resultingPlayers) : <h1>No Players to Show</h1>}
            </div>
        )
    }

    renderPlayers(resultingPlayers){

        return resultingPlayers.map( player => (
            <Player key={player.id} {...player} />
        ))
    }

}

export default AllPlayers
