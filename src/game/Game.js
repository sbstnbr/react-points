import React from 'react';
import Grid from '@material-ui/core/Grid';

import RoundList from './../round/RoundList';
import Score from './../score/Score';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds:[],
      players: ["Jess", "Seb"]
    };
    this.createRound = this.createRound.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.resetRound = this.resetRound.bind(this);
    this.updatePlayerName = this.updatePlayerName.bind(this);
  }

  createRound(){
    return this.setState({
      rounds: this.state.rounds.concat([{
        "id": this.state.rounds.length,
        "result": [0,0]
      }])
    });
  }

  addPoint(rounds,roundId,player){
    //TODO: Improve
    let updatedRound = {...rounds[roundId]};
    updatedRound.result[player]+=1;
    let updatedRounds = rounds.slice();
    updatedRounds.splice(roundId,1,updatedRound);
    return this.setState({
      rounds: updatedRounds
    })
  }

  resetRound(rounds,roundId){
    let updatedRound = {...rounds[roundId]};
    updatedRound.result = [0,0];
    let updatedRounds = rounds.slice();
    updatedRounds.splice(roundId,1,updatedRound);
    return this.setState({
      rounds: updatedRounds
    })
  }

  updatePlayerName(players,id,newName){
    let updatedPlayers = players.slice();
    updatedPlayers[id]=newName;
    return this.setState({
      players: updatedPlayers
    })
  }

  render(){
    return (
      <Grid container spacing={16}>
        <Score 
          rounds={this.state.rounds}
          players={this.state.players}
          handleUpdatePlayerName={this.updatePlayerName}
        />
        <RoundList 
          rounds={this.state.rounds}
          handleNewRound={this.createRound}
          handleAddPoint={this.addPoint}
          handleResetRound={this.resetRound}
        />
      </Grid>
    )
  }
}

export default Game;