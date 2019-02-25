import React, { useState } from 'react';
import Game from './Game';
import WistRound from '../round/WistRound';

export default function WistGame() {
  const [rounds, setRounds] = useState([]);
  const createRound = () => {
    const newRound = {
      id: rounds.length,
      result: new Array(2).fill(0), // TODO: Refactor with nbPlayers,
      activeStep: 0,
    };
    return setRounds(rounds.concat([newRound]));
  };
  const increaseFold = () => null;
  const decreaseFold = () => null;
  const switchActiveStep = roundId => step => () => {
    const newRounds = rounds.map((round) => {
      if (round.id === roundId) {
        return { ...round, activeStep: step };
      }
      return round;
    });
    setRounds(newRounds);
  };
  return (
    <Game gameType="Wist" createRound={createRound} allowAddPlayer>
      {rounds.map(round => (
        <WistRound
          key={round.id}
          id={round.id}
          result={round.result}
          activeStep={round.activeStep}
          handleSwitchActiveStep={switchActiveStep(round.id)}
          handleIncreaseFold={increaseFold}
          handleDecreaseFold={decreaseFold}
        />
      ))}
    </Game>
  );
}
