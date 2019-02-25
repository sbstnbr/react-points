import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

export default function WistRoundResult(props) {
  const {
    playerId, handleIncreaseFold, handleDecreaseFold, score,
  } = props;
  return (
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
        <Button
          variant="contained"
          onClick={() => handleIncreaseFold(playerId)}
          onContextMenu={(e) => {
            e.preventDefault();
            return handleDecreaseFold(playerId);
          }}
        >
          {score}
        </Button>
      </Badge>
    </Grid>
  );
}
