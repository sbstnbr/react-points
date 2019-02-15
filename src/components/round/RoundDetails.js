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
  round: {
    width: '100%',
  },
};

class RoundDetails extends React.Component {
  render() {
    const {
      classes, result, id, handleAddPoint, handleResetRound,
    } = this.props;
    const roundResults = result.map((score, playerId) => (
      <Grid
        item
        container
        key={playerId}
        className={classes.result}
        xs={6}
        alignItems="center"
        direction="column"
      >
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
      </Grid>
    ));
    return (
      <Grid item xs={12} className={classes.round}>
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
  classes: PropTypes.shape({ result: PropTypes.string.isRequired }).isRequired,
  result: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  handleAddPoint: PropTypes.func.isRequired,
  handleResetRound: PropTypes.func.isRequired,
};

export default withStyles(styles)(RoundDetails);
