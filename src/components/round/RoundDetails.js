import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  result: {
    // justify: 'center',
  },
};

class RoundDetails extends React.Component {
  render() {
    const {
      classes, result, rounds, id, handleAddPoint, handleResetRound,
    } = this.props;
    const roundResults = result.map((score, playerId) => (
      <Grid item key={playerId} className={classes.result}>
        <Button
          variant="contained"
          onClick={() => handleAddPoint(rounds, id, playerId)}
          onContextMenu={(e) => {
            e.preventDefault();
            return handleResetRound(id, playerId);
          }}
        >
          {score}
        </Button>
      </Grid>
    ));
    return (
      <Grid item>
        <Card>
          <CardContent>
            <Grid container spacing={16} justify="center">
              {roundResults}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

RoundDetails.propTypes = {
  result: PropTypes.arrayOf(PropTypes.number).isRequired,
  rounds: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
  handleAddPoint: PropTypes.func.isRequired,
  handleResetRound: PropTypes.func.isRequired,
};

export default withStyles(styles)(RoundDetails);
