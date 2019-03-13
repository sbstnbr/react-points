import React from 'react';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RoundList from '../Round/RoundList';
import ScoreList from '../Score/ScoreList';
import GameBar from './GameBar';
import GameDrawer from './GameDrawer';

const styles = theme => ({
  parent: {
    padding: '20px',
  },
  fab: {
    position: 'fixed',
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

  render() {
    const { open } = this.state;
    const {
      classes,
      gameType,
      allowAddPlayer,
      children,
      createRound,
      rounds,
      calculateTotalPoints,
      players,
      updatePlayerName,
      addPlayer,
    } = this.props;
    return (
      <div>
        <GameBar gameType={gameType} toggleDrawer={this.toggleDrawer} />
        <GameDrawer toggleDrawer={this.toggleDrawer} open={open} />
        <Grid container spacing={16} alignItems="center" className={classes.parent}>
          <ScoreList
            rounds={rounds}
            players={players}
            handleUpdatePlayerName={updatePlayerName}
            handleAddPlayer={addPlayer}
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
