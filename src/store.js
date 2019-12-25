import { writable, derived } from "svelte/store";

export const game = writable({});

export const turn = writable("");

export const whoWins = writable("");
// const whoWins = derived(game, _game => _game && _game.getwhoWins && _game.getwhoWins());

export const boardFull = derived(game, _game => _game && _game.isBoardFull && _game.isBoardFull());
// const boardFull = derived(game, _game => _game && _game.isBoardFull && _game.isBoardFull());

export const tieGame = writable("");
// const tieGame = derived([whoWins, boardFull], ([_whoWins, _boardFull]) => _boardFull && _whoWins === null);

// export { game, turn, whoWins, boardFull, tieGame };
