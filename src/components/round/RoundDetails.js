import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class RoundDetails extends React.Component {
  render() {
    const {
      result, rounds, id, handleAddPoint, handleResetRound,
    } = this.props;
    const roundResults = result.map((score, playerId) => (
      <Grid item key={playerId}>
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
            <Grid container spacing={16}>
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

export default RoundDetails;
