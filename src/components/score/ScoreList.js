import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Score from './Score';

function ScoreList(props) {
  const {
    players,
    rounds,
    handleUpdatePlayerName,
    allowAddPlayer,
    handleAddPlayer,
    calculateTotalPoints,
  } = props;
  const Players = players.map((player, id) => (
    <Score
      player={player}
      points={calculateTotalPoints(rounds, id)}
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
    <Grid item xs={12} container justify="space-evenly">
      {Players}
      {addPlayerButton}
    </Grid>
  );
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
