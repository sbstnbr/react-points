import React from 'react';
import Grid from '@material-ui/core/Grid';


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import RoundList from './../round/RoundList';
import Score from './../score/Score';
import GameDrawer from './GameDrawer';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

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
    players: ["Jess", "Seb"],
    open: false
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

  addPlayer = (player) => {
    let updatedPlayers = this.state.players.slice();
    updatedPlayers.push('Bro');
    return this.setState({
      players: updatedPlayers
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

  setGameType = gameType => () => {
    this.toggleDrawer(false);
    return this.setState({
      gameType,
      ...this.defaultState
    })
  }

  toggleDrawer = (open) => () => {
    this.setState({
      open: open,
    });
  };

  render(){
    
    return (
      // <div className={this.props.classes.root}>
      <div>
          
        <Grid container spacing={16}>
          <AppBar position="static">
          {/* <AppBar> */}
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              {/* <Typography variant="h6" color="inherit" className={this.props.classes.grow}> */}
              <Typography variant="h6" color="inherit">
                {this.state.gameType}
              </Typography>
            </Toolbar>
          </AppBar>
          <GameDrawer
            setGameType={this.setGameType}
            toggleDrawer={this.toggleDrawer}
            open={this.state.open}
          />
          <Score 
            rounds={this.state.rounds}
            players={this.state.players}
            handleUpdatePlayerName={this.updatePlayerName}
            handleAddPlayer={this.addPlayer}
          />
          <RoundList 
            rounds={this.state.rounds}
            handleNewRound={this.createRound}
            handleAddPoint={this.addPoint}
            handleResetRound={this.resetRound}
          />
        </Grid>
      </div>
    )
  }
}

// export default withStyles(styles)(Game);
export default Game;
