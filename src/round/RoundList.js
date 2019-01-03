import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import RoundDetails from './RoundDetails';

class RoundList extends React.Component {
  render(){
    const rounds = this.props.rounds.map(round => 
      <RoundDetails 
        key={round.id}
        id={round.id}
        result={round.result}
        handleAddPoint={this.props.handleAddPoint}
        handleResetRound={this.props.handleResetRound}
        rounds={this.props.rounds}
      />
    );
    return (
      <Grid container direction={"column"} spacing={16}>
        {rounds}
        <Grid item>
          <Button 
            variant="contained"
            onClick={this.props.handleNewRound}
          >
            New Round
          </Button>
        </Grid>
      </Grid>
    )
  }
}


export default RoundList;