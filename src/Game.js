import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';
 


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

class RoundDetails extends React.Component {
  render (){
    return (
      <Grid item>
        <Card>
          <CardContent>
            <Grid container spacing={16}>
              <Grid item>
                {this.props.id}
              </Grid>
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

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds:[]
    };
    this.createRound = this.createRound.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.resetRound = this.resetRound.bind(this);
  }

  createRound(){
    return this.setState({
      rounds: this.state.rounds.concat([{
        "id": this.state.rounds.length,
        "result": [0,0]
      }])
    });
  }

  addPoint(rounds,roundId,player){
    //TODO: Improve
    let updatedRound = {...rounds[roundId]};
    updatedRound.result[player]+=1;
    let updatedRounds = rounds.slice();
    updatedRounds.splice(roundId,1,updatedRound);
    return this.setState({
      rounds: updatedRounds
    })
  }

  resetRound(rounds,roundId){
    let updatedRound = {...rounds[roundId]};
    updatedRound.result = [0,0];
    let updatedRounds = rounds.slice();
    updatedRounds.splice(roundId,1,updatedRound);
    return this.setState({
      rounds: updatedRounds
    })
  }

  render(){
    return (
      <Grid container spacing={16}>
        <Score score={this.state.score} rounds={this.state.rounds}/>
        <Rounds 
          rounds={this.state.rounds}
          handleNewRound={this.createRound}
          handleAddPoint={this.addPoint}
          handleResetRound={this.resetRound}
        />
      </Grid>
    )
  }
}

export default Game;