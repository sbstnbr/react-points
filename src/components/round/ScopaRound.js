import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Round from './Round';
import useLongPress from '../../hooks/useLongPress';

const styles = {};

const ScopaRound = ({
  result, id, handleAddPoint, handleResetRound, playerIdToServe,
}) => {
  const scoreLongPress = (id, playerId) => useLongPress(() => handleResetRound(id, playerId), 500);
  return (
    <Round>
      <CardContent>
        <Grid container spacing={16} justify="space-evenly">
          {result.map((score, playerId) => (
            <Grid
              item
              container
              key={playerId}
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
                    // return handleResetRound(id, playerId);
                  }}
                  {...scoreLongPress(id, playerId)}
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
};

ScopaRound.propTypes = {
  result: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  handleAddPoint: PropTypes.func.isRequired,
  handleResetRound: PropTypes.func.isRequired,
};

export default withStyles(styles)(ScopaRound);
