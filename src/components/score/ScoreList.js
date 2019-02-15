import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Score from './Score';

class ScoreList extends React.Component {
  calculatePoints = (rounds, i) => rounds.map(round => round.result[i]).reduce((acc, val) => acc + val, 0);

  render() {
    const {
      players, rounds, handleUpdatePlayerName, allowAddPlayer, handleAddPlayer,
    } = this.props;
    const Players = players.map((player, id) => (
      <Score
        player={player}
        points={this.calculatePoints(rounds, id)}
        handleUpdatePlayerName={handleUpdatePlayerName}
        key={player.id}
      />
    ));
    const addPlayerButton = allowAddPlayer ? (
      <IconButton onClick={() => handleAddPlayer()}>
        <Add />
      </IconButton>
    ) : null;
    return (
      <Grid item xs={12} container wrap="nowrap">
        {Players}
        {addPlayerButton}
      </Grid>
    );
  }
}

ScoreList.propTypes = {
  rounds: PropTypes.arrayOf(PropTypes.object).isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired, name: PropTypes.string.isRequired }),
  ).isRequired,
  allowAddPlayer: PropTypes.bool.isRequired,
  handleUpdatePlayerName: PropTypes.func.isRequired,
  handleAddPlayer: PropTypes.func.isRequired,
};

export default ScoreList;
