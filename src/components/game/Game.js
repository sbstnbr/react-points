import React from 'react';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RoundList from '../round/RoundList';
import ScoreList from '../score/ScoreList';
import GameBar from './GameBar';
import GameDrawer from './GameDrawer';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  toggleDrawer = (open) => {
    this.setState({
      open,
    });
  };

  addPlayer = (name = 'Bro') => {
    const { increaseNbPlayers } = this.props;
    increaseNbPlayers();
    return this.setState(state => ({
      players: [...state.players, { id: state.players.length, name }],
    }));
  };

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

  createWistRound = () => this.setState((state) => {
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
    const { players, open } = this.state;
    const {
      classes,
      gameType,
      allowAddPlayer,
      children,
      createRound,
      rounds,
      calculateTotalPoints,
    } = this.props;
    return (
      <div>
        <GameBar gameType={gameType} toggleDrawer={this.toggleDrawer} />
        <GameDrawer toggleDrawer={this.toggleDrawer} open={open} />
        <Grid container spacing={16} alignItems="center" style={{ padding: '20px' }}>
          <ScoreList
            rounds={rounds}
            players={players}
            handleUpdatePlayerName={this.updatePlayerName}
            handleAddPlayer={this.addPlayer}
            allowAddPlayer={allowAddPlayer}
            calculateTotalPoints={calculateTotalPoints}
          />
          <RoundList>{children}</RoundList>
          <Fab onClick={createRound} color="secondary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Grid>
      </div>
    );
  }
}

Game.propTypes = {
  allowAddPlayer: PropTypes.bool,
};
Game.defaultProps = {
  allowAddPlayer: false,
};

export default withStyles(styles)(Game);
