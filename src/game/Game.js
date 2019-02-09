import React from 'react';
import Grid from '@material-ui/core/Grid';
import RoundList from '../round/RoundList';
import Score from '../score/Score';

class Game extends React.Component {
  render() {
    return (
      <Grid container spacing={16} alignItems="center" style={{ padding: '20px' }}>
        <Score
          rounds={this.props.rounds}
          players={this.props.players}
          handleUpdatePlayerName={this.props.updatePlayerName}
          handleAddPlayer={this.props.addPlayer}
          allowAddPlayer={this.props.rules[this.state.gameType].allowAddPlayer}
        />
        <RoundList
          rounds={this.state.rounds}
          handleNewRound={this.createRound}
          handleAddPoint={this.addPoint}
          handleResetRound={this.resetRound}
        />
      </Grid>
    );
  }
}

export default Game;
