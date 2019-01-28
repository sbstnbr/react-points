import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class RoundDetails extends React.Component {
  render (){
    const roundResults = this.props.result.map((result,playerId)=>
    <Grid item key={playerId}>
      <Button 
        variant="contained"
        onClick={() => this.props.handleAddPoint(this.props.rounds,this.props.id,playerId)}
        onContextMenu={(e) => {
          e.preventDefault();
          return this.props.handleResetRound(this.props.id,playerId)}
        }
      >
        {result}
      </Button>
    </Grid>
    )
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
    )
  }
}
export default RoundDetails;