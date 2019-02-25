import React, { useState } from 'react';
import Game from './Game';
import WistRound from '../round/WistRound';
import WistRoundResult from '../round/WistRoundResult';

export default function WistGame() {
  const [rounds, setRounds] = useState([]);
  const createRound = () => {
    const newRound = {
      id: rounds.length,
      results: [{ playerId: 0 }, { playerId: 1 }], // TODO: Refactor with nbPlayers,
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
          activeStep={round.activeStep}
          handleSwitchActiveStep={switchActiveStep(round.id)}
          handleIncreaseFold={increaseFold}
          handleDecreaseFold={decreaseFold}
        >
          {round.results.map(result => (
            <WistRoundResult
              key={result.playerId}
              score={0}
              playerId={result.playerId}
              handleIncreaseFold={increaseFold}
              handleDecreaseFold={decreaseFold}
            />
          ))}
        </WistRound>
      ))}
    </Game>
  );
}
