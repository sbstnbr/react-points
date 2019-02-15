import React from 'react';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RoundList from './round/RoundList';
import ScoreList from './score/ScoreList';
import GameDrawer from './game/GameDrawer';

class App extends React.Component {
  defaultState = {
    rounds: [],
    players: [
      {
        id: 0,
        name: 'Jess',
      },
      {
        id: 1,
        name: 'Seb',
      },
    ],
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
  }

  resetGame = (gameType = 'Scopa') => {
    this.toggleDrawer(false);
    return this.setState({
      gameType,
      ...this.defaultState,
    });
  };

  toggleDrawer = (open) => {
    this.setState({
      open,
    });
  };

  addPlayer = (name = 'Bro') => this.setState(state => ({
    players: [...state.players, { id: state.players.length, name }],
  }));

  updatePlayerName = (id, newName) => this.setState((state) => {
    const players = state.players.map((player) => {
      if (player.id === id) {
        return { ...player, name: newName };
      }
      return player;
    });
    return { players };
  });

  addPoint = (roundId, playerId) => this.setState((state) => {
    const rounds = state.rounds.slice();
    rounds[roundId].result[playerId] += 1;
    return rounds;
  });

  createRound = () => this.setState((state) => {
    const newRound = {
      id: state.rounds.length,
      result: new Array(state.players.length).fill(0),
    };
    const rounds = [...state.rounds, newRound];
    return { rounds };
  });

  resetRound = (roundId, playerId) => this.setState((state) => {
    const rounds = state.rounds.map((round) => {
      if (round.id === roundId) {
        const newResult = round.result.map((result, id) => {
          if (id === playerId) {
            return 0;
          }
          return result;
        });
        return { ...round, result: newResult };
      }
      return round;
    });
    return { rounds };
  });

  render() {
    const {
      rounds, players, gameType, open,
    } = this.state;
    const ScopaGame = () => (
      <Grid container spacing={16} alignItems="center" style={{ padding: '20px' }}>
        <ScoreList
          rounds={rounds}
          players={players}
          handleUpdatePlayerName={this.updatePlayerName}
          handleAddPlayer={this.addPlayer}
          allowAddPlayer={this.rules[gameType].allowAddPlayer}
        />
        <RoundList
          rounds={rounds}
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
              <IconButton color="inherit" aria-label="Menu" onClick={() => this.toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                {gameType}
              </Typography>
            </Toolbar>
          </AppBar>
          <GameDrawer resetGame={this.resetGame} toggleDrawer={this.toggleDrawer} open={open} />
          <Route exact path="/" component={ScopaGame} />
          <Route path="/Scopa" component={ScopaGame} />
          <Route path="/Wist" component={ScopaGame} />
        </div>
      </Router>
    );
  }
}

export default App;
