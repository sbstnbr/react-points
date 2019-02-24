import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core';
import Round from './Round';

const styles = {
  badge: {
    top: 'unset',
    bottom: '-50%',
  },
};

function WistRound(props) {
  const {
    result, id, handleAddPoint, handleResetRound, classes,
  } = props;
  return (
    <Round>
      <Grid container spacing={16}>
        {result.map((score, playerId) => (
          <Grid
            item
            container
            key={playerId}
            // className={classes.result}
            xs={6}
            alignItems="center"
            direction="column"
          >
            <Badge color="primary" badgeContent={2}>
              <Badge color="secondary" badgeContent={4} className={classes.badge}>
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
            </Badge>
          </Grid>
        ))}
      </Grid>
    </Round>
  );
}

export default withStyles(styles)(WistRound);
