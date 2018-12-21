import React from 'react';
import data from './data';

function Score() {
  return (
    <div>
      <Player data={data.score[0]}/>
      <Player data={data.score[1]}/>
    </div>
  )
}

function Player(props) {
  return (
    <div>
        {props.data.name}
        {props.data.points}
    </div>
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
      <button>New Round</button>
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
      <div>
        <Score/>
        <Rounds/>
      </div>
    )
  }
}

export default Game