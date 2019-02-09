import React from 'react';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RoundList from './round/RoundList';
import Score from './score/Score';
import GameDrawer from './game/GameDrawer';

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

class App extends React.Component {
  defaultState = {
    rounds: [],
    players: ['Jess', 'Seb'],
    open: false,
  };

  rules = {
    Scopa: {
      allowAddPlayer: false,
    },
    Wist: {
      allowAddPlayer: true,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      gameType: 'Scopa',
      ...this.defaultState,
    };
    this.createRound = this.createRound.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.resetRound = this.resetRound.bind(this);
    this.updatePlayerName = this.updatePlayerName.bind(this);
    this.setGameType = this.setGameType.bind(this);
  }

  addPoint(rounds, roundId, player) {
    // TODO: Improve
    const updatedRound = { ...rounds[roundId] };
    updatedRound.result[player] += 1;
    const updatedRounds = rounds.slice();
    updatedRounds.splice(roundId, 1, updatedRound);
    return this.setState({
      rounds: updatedRounds,
    });
  }

  addPlayer = (player) => {
    const updatedPlayers = this.state.players.slice();
    updatedPlayers.push('Bro');
    return this.setState({
      players: updatedPlayers,
    });
  };

  resetRound(roundId, playerId) {
    const updatedRounds = this.state.rounds.slice();
    updatedRounds[roundId].result[playerId] = 0;
    return this.setState({
      rounds: updatedRounds,
    });
  }

  updatePlayerName(players, id, newName) {
    const updatedPlayers = players.slice();
    updatedPlayers[id] = newName;
    return this.setState({
      players: updatedPlayers,
    });
  }

  setGameType = gameType => () => {
    this.toggleDrawer(false);
    return this.setState({
      gameType,
      ...this.defaultState,
    });
  };

  toggleDrawer = open => () => {
    this.setState({
      open,
    });
  };

  createRound() {
    return this.setState({
      rounds: this.state.rounds.concat([
        {
          id: this.state.rounds.length,
          result: new Array(this.state.players.length).fill(0),
        },
      ]),
    });
  }

  render() {
    const Game = () => (
      <Grid container spacing={16} alignItems="center" style={{ padding: '20px' }}>
        <Score
          rounds={this.state.rounds}
          players={this.state.players}
          handleUpdatePlayerName={this.updatePlayerName}
          handleAddPlayer={this.addPlayer}
          allowAddPlayer={this.rules[this.state.gameType].allowAddPlayer}
        />
        <RoundList
          rounds={this.state.rounds}
          handleNewRound={this.createRound}
          handleAddPoint={this.addPoint}
          handleResetRound={this.resetRound}
        />
      </Grid>
    );
    return (
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
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
          <Route exact path="/" component={Game} />
          <Route path="/Scopa" component={Game} />
          <Route path="/Wist" component={Game} />
        </div>
      </Router>
    );
  }
}

export default App;
