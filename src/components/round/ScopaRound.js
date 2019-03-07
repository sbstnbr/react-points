import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Round from './Round';

const styles = {
  result: {
    // justify: 'center',
  },
  round: {
    width: '100%',
  },
};

function ScopaRound(props) {
  const {
    classes, result, id, handleAddPoint, handleResetRound, playerIdToServe,
  } = props;
  return (
    <Round>
      <CardContent>
        <Grid container spacing={16} justify="space-evenly">
          {result.map((score, playerId) => (
            <Grid
              item
              container
              key={playerId}
              className={classes.result}
              xs={3}
              sm={2}
              md={1}
              alignItems="center"
              direction="column"
            >
              <Badge variant="dot" invisible={playerId !== playerIdToServe} color="primary">
                <Button
                  variant="contained"
                  onClick={() => handleAddPoint(id, playerId)}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    return handleResetRound(id, playerId);
                  }}
                >
                  {score}
                </Button>
              </Badge>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Round>
  );
}

ScopaRound.propTypes = {
  classes: PropTypes.shape({ result: PropTypes.string.isRequired }).isRequired,
  result: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  handleAddPoint: PropTypes.func.isRequired,
  handleResetRound: PropTypes.func.isRequired,
};

export default withStyles(styles)(ScopaRound);
