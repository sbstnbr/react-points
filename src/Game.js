import React from 'react';
import data from './data';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';


function Score(props) {
  return (
    <Grid item xs={12}>
      <Grid container alignContent={"center"}>
        <Player name={props.score[0].name} points={props.score[0].points}/>
        <Player name={props.score[1].name} points={props.score[1].points}/>
      </Grid>
    </Grid>
  )
}

function Player(props) {
  return (
    <Grid item xs={6}>        
        <Avatar>{props.name.split('')[0]}</Avatar>
        {props.points}
    </Grid>
  )
}

function Rounds(props){
  const rounds = props.rounds.map(round => 
    <RoundDetails key={round.id} data={round}/>
  );
  return (
    <Grid container direction={"column"} spacing={16}>
      {rounds}
      <Grid item>
        <Button variant="contained">New Round</Button>
      </Grid>
    </Grid>
  )
}

class RoundDetails extends React.Component {
  calculatePoints(i){
    return this.props.data.result[i];
  }
  render (){
    return (
      <Grid item>
        <Card>
          <CardContent>
            {this.props.data.id}
            -
            {this.calculatePoints(0)}
            /
            {this.calculatePoints(1)}
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...data
    };
  }
  render(){
    return (
      <Grid container spacing={16}>
        <Score score={this.state.score}/>
        <Rounds rounds={this.state.rounds}/>
      </Grid>
    )
  }
}

export default Game;