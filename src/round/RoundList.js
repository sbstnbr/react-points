import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';

import RoundDetails from './RoundDetails';

class RoundList extends React.Component {
  render() {
    const rounds = this.props.rounds.map(round => (
      <RoundDetails
        key={round.id}
        id={round.id}
        result={round.result}
        handleAddPoint={this.props.handleAddPoint}
        handleResetRound={this.props.handleResetRound}
        rounds={this.props.rounds}
      />
    ));
    return (
      <Grid item container direction="column" alignItems="center" spacing={16}>
        {rounds}
        <Grid item>
          <IconButton
            onClick={this.props.handleNewRound}
          >
            <Add />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}


export default RoundList;
