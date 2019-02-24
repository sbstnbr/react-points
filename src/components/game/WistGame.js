import React, { useState } from 'react';
import Game from './Game';
import WistRound from '../round/WistRound';

export default function WistGame() {
  const [rounds, setRounds] = useState([]);
  const createRound = () => {
    const newRound = {
      id: rounds.length,
      result: new Array(2).fill(0), // TODO: Refactor with nbPlayers
    };
    return setRounds(rounds.concat([newRound]));
  };
  return (
    <Game gameType="Wist" createRound={createRound} allowAddPlayer>
      {rounds.map(round => (
        <WistRound
          key={round.id}
          id={round.id}
          result={round.result}
          // handleAddPoint={addPoint}
          // handleResetRound={resetRound}
        />
      ))}
    </Game>
  );
}
