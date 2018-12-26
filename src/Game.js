import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';


class Score extends React.Component {
  calculatePoints(i){
    return this.props.rounds.map(round=> round.result[i]).reduce((acc,val) => acc+val,0)
  }
  render(){
    return (
      <Grid item xs={12}>
      <Grid container>
        <Player name="Jess" points={this.calculatePoints(0)}/>
        <Player name="Seb" points={this.calculatePoints(1)}/>
      </Grid>
    </Grid>
    )
  }
}

function Player(props) {
  return (
    <Grid item xs={6}>        
        <Avatar>{props.name.split('')[0]}</Avatar>
        {props.points}
    </Grid>
  )
}

class Rounds extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.createRound = this.createRound.bind(this);
  }

  createRound(){
    return alert(this.props)
  }
  render(){
    const rounds = this.props.rounds.map(round => 
      <RoundDetails 
        key={round.id}
        id={round.id}
        result={round.result}
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

class RoundDetails extends React.Component {
  calculatePoints(i){
    return this.props.result[i];
  }
  render (){
    return (
      <Grid item>
        <Card>
          <CardContent>
            {this.props.id}
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
      rounds:[]
    };
    this.createRound = this.createRound.bind(this);
  }

  createRound(){
    return this.setState({
      rounds: this.state.rounds.concat([{
        "id": this.state.rounds.length,
        "result": [this.state.rounds.length,0]
      }])
    });
  }
  render(){
    return (
      <Grid container spacing={16}>
        <Score score={this.state.score} rounds={this.state.rounds}/>
        <Rounds 
          rounds={this.state.rounds}
          handleNewRound={this.createRound}
        />
      </Grid>
    )
  }
}

export default Game;