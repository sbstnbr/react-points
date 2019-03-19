export const defaultPlayers = [
  {
    id: 0,
    name: 'Jess',
  },
  {
    id: 1,
    name: 'Seb',
  },
];

export const scopaInitialState = {
  players: defaultPlayers,
  rounds: [],
  firstPlayerIdToServe: 0,
};

export const scopa = {
  defaultState: scopaInitialState,
  // defaultRound: scopaDefaultRound,
};

export const wistInitialState = {
  players: defaultPlayers,
  rounds: [],
};
