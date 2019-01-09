import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';

class RoundDetails extends React.Component {
  render (){
    return (
      <Grid item>
        <Card>
          <CardContent>
            <Grid container spacing={16}>
              <Grid item>
                <Button variant="contained" onClick={() => this.props.handleAddPoint(this.props.rounds,this.props.id,0)}>
                  {this.props.result[0]}
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => this.props.handleAddPoint(this.props.rounds,this.props.id,1)}>
                  {this.props.result[1]}
                </Button>
              </Grid>
              <Grid item>
                <IconButton onClick={() => this.props.handleResetRound(this.props.rounds,this.props.id)}>
                  <Cancel/>
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}
export default RoundDetails;