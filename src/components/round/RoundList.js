import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';

import RoundDetails from './RoundDetails';

function RoundList(props) {
  const {
    rounds, handleAddPoint, handleResetRound, handleNewRound,
  } = props;
  const Rounds = rounds.map(round => (
    <RoundDetails
      key={round.id}
      id={round.id}
      result={round.result}
      handleAddPoint={handleAddPoint}
      handleResetRound={handleResetRound}
      rounds={props.rounds}
    />
  ));
  return (
    <Grid item container direction="column" alignItems="center" spacing={16}>
      {Rounds}
      <Grid item>
        <IconButton onClick={handleNewRound}>
          <Add />
        </IconButton>
      </Grid>
    </Grid>
  );
}

RoundList.propTypes = {
  rounds: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddPoint: PropTypes.func.isRequired,
  handleResetRound: PropTypes.func.isRequired,
  handleNewRound: PropTypes.func.isRequired,
};

export default RoundList;
