import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

import Round from './Round';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

function RoundList(props) {
  const {
    classes, rounds, handleAddPoint, handleResetRound, handleNewRound,
  } = props;
  const Rounds = rounds.map(round => (
    <Round
      key={round.id}
      id={round.id}
      result={round.result}
      handleAddPoint={handleAddPoint}
      handleResetRound={handleResetRound}
    />
  ));
  return (
    <Grid item container direction="column" alignItems="center" spacing={16}>
      {Rounds}
      <Fab onClick={handleNewRound} color="secondary" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Grid>
  );
}

RoundList.propTypes = {
  classes: PropTypes.shape({ fab: PropTypes.string.isRequired }).isRequired,
  rounds: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddPoint: PropTypes.func.isRequired,
  handleResetRound: PropTypes.func.isRequired,
  handleNewRound: PropTypes.func.isRequired,
};

export default withStyles(styles)(RoundList);
