import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

const getBadgeColor = points => (points < 0 ? 'secondary' : 'primary');

const WistRoundResult = ({
  playerId, handleIncreaseFold, handleDecreaseFold, folds, points,
}) => (
  <Grid
    item
    container
    key={playerId}
      // className={classes.result}
    xs={3}
    sm={2}
    md={1}
    alignItems="center"
    direction="column"
  >
    <Badge color={getBadgeColor(points)} badgeContent={folds} showZero>
      <Button
        variant="contained"
        onClick={() => handleIncreaseFold(playerId)}
        onContextMenu={(e) => {
          e.preventDefault();
          return handleDecreaseFold(playerId);
        }}
      >
        {points || '-'}
      </Button>
    </Badge>
  </Grid>
);

export default WistRoundResult;
