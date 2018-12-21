import React from 'react';
import data from './data';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


function Score() {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Player data={data.score[0]}/>
        <Player data={data.score[1]}/>
      </Grid>
    </Grid>
  )
}

function Player(props) {
  return (
    <Grid item xs={6}>        
        {props.data.name}
        {props.data.points}
    </Grid>
  )
}

function Rounds(){
  const rounds = data.rounds.map(round => 
    <RoundDetails key={round.id} data={round}/>
  );
  return (
    <div>
      <ul>
        {rounds}
      </ul>
      <Button variant="contained">New Round</Button>
    </div>
  )
}

class RoundDetails extends React.Component {
  calculatePoints(i){
    return this.props.data.result[i];
  }
  render (){
    return (
      <li>
        {this.props.data.id}
        -
        {this.calculatePoints(0)}
        /
        {this.calculatePoints(1)}
      </li>
    )
  }
}

class Game extends React.Component {
  render(){
    return (
      <Grid container>
        <Score/>
        <Rounds/>
      </Grid>
    )
  }
}

export default Game