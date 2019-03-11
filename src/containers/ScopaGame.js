import React, { useState } from 'react';
import Game from '../components/game/Game';
import ScopaRound from '../components/round/ScopaRound';

export default function ScopaGame() {
  const [rounds, setRounds] = useState([]);
  const [nbPlayers, setNbPlayers] = useState(2);
  const firstPlayerIdToServe = Math.floor(Math.random() * nbPlayers);
  const [nextPlayerIdToServe, setNextPlayerIdToServe] = useState(firstPlayerIdToServe);

  const switchNextPlayerIdToServe = () => setNextPlayerIdToServe(nextPlayerIdToServe === nbPlayers - 1 ? 0 : nextPlayerIdToServe + 1);

  const createRound = () => {
    const newRound = {
      id: rounds.length,
      playerIdToServe: nextPlayerIdToServe,
      result: new Array(nbPlayers).fill(0),
    };
    switchNextPlayerIdToServe();
    return setRounds(rounds.concat([newRound]));
  };

  const addPoint = (roundId, playerId) => {
    const newRounds = rounds.slice();
    newRounds[roundId].result[playerId] += 1;
    return setRounds(newRounds);
  };

  const resetRound = (roundId, playerId) => {
    const newRounds = rounds.map((round) => {
      if (round.id === roundId) {
        const newResult = round.result.map((result, id) => {
          if (id === playerId) {
            return 0;
          }
          return result;
        });
        return { ...round, result: newResult };
      }
      return round;
    });
    return setRounds(newRounds);
  };

  const calculateTotalPoints = (rounds, i) => rounds.map(round => round.result[i]).reduce((acc, val) => acc + val, 0);

  const allowAddPlayer = rounds.length === 0;

  const increaseNbPlayers = () => setNbPlayers(nbPlayers + 1);

  return (
    <Game
      gameType="Scopa"
      createRound={createRound}
      rounds={rounds}
      calculateTotalPoints={calculateTotalPoints}
      allowAddPlayer={allowAddPlayer}
      increaseNbPlayers={increaseNbPlayers}
    >
      {rounds.map(round => (
        <ScopaRound
          key={round.id}
          id={round.id}
          result={round.result}
          handleAddPoint={addPoint}
          handleResetRound={resetRound}
          playerIdToServe={round.playerIdToServe}
        />
      ))}
    </Game>
  );
}
