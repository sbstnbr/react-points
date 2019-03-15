import React, { useState, useReducer } from 'react';
import Game from '../../components/Game/Game';
import ScopaRound from '../../components/Round/ScopaRound';
import playersReducer from '../../reducers/players';
import { playerAdd, playerUpdate } from '../../actions';

export default function ScopaGame() {
  const defaultPlayers = [
    {
      id: 0,
      name: 'Jess',
    },
    {
      id: 1,
      name: 'Seb',
    },
  ];
  const [rounds, setRounds] = useState([]);
  const [players, dispatch] = useReducer(playersReducer, defaultPlayers);
  const firstPlayerIdToServe = Math.floor(Math.random() * players.length);
  const [nextPlayerIdToServe, setNextPlayerIdToServe] = useState(firstPlayerIdToServe);

  const switchNextPlayerIdToServe = () => setNextPlayerIdToServe(
    nextPlayerIdToServe === players.length - 1 ? 0 : nextPlayerIdToServe + 1,
  );

  const createRound = () => {
    const newRound = {
      id: rounds.length,
      playerIdToServe: nextPlayerIdToServe,
      result: new Array(players.length).fill(0),
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

  const addPlayer = name => dispatch(playerAdd(name));

  const updatePlayerName = (id, newName) => dispatch(playerUpdate(id, newName));

  return (
    <Game
      gameType="Scopa"
      createRound={createRound}
      rounds={rounds}
      calculateTotalPoints={calculateTotalPoints}
      allowAddPlayer={allowAddPlayer}
      players={players}
      updatePlayerName={updatePlayerName}
      addPlayer={addPlayer}
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
