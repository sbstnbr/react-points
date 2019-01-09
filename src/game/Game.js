import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';

import RoundList from './../round/RoundList';
import Score from './../score/Score';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: 'Scopa',
      ...this.defaultState
    };
    this.createRound = this.createRound.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.resetRound = this.resetRound.bind(this);
    this.updatePlayerName = this.updatePlayerName.bind(this);
    this.setGameType = this.setGameType.bind(this);
  }

  defaultState = {
    rounds:[],
    players: ["Jess", "Seb"]
  };

  createRound(){
    return this.setState({
      rounds: this.state.rounds.concat([{
        "id": this.state.rounds.length,
        "result": new Array(this.state.players.length).fill(0)
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
    updatedRound.result = new Array(this.state.players.length).fill(0);
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

  setGameType = () => event => {
    this.setState({
      gameType: event.target.value,
      ...this.defaultState
    })
  }

  render(){
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <FormControl variant="filled" style={{width:'100%'}}>
            <InputLabel htmlFor="filled-gameType-native-simple">Game Type</InputLabel>
            <Select
              native
              value={this.state.gameType}
              onChange={this.setGameType()}
              input={<FilledInput name="gameType" id="filled-gameType-native-simple" />}
            >
              <option value="Scopa">Scopa</option>
              <option value="Wist">Wist</option>
            </Select>
          </FormControl>
        </Grid>
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