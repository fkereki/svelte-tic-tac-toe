import { writable, derived } from "svelte/store";

const game = writable({});

const turn = writable("");

const whoWins = writable("");
// const whoWins = derived(game, _game => _game && _game.getwhoWins && _game.getwhoWins());

const boardFull = derived(game, _game => _game && _game.isBoardFull && _game.isBoardFull());
// const boardFull = derived(game, _game => _game && _game.isBoardFull && _game.isBoardFull());

const tieGame = writable("");
// const tieGame = derived([whoWins, boardFull], ([_whoWins, _boardFull]) => _boardFull && _whoWins === null);

export { game, turn, whoWins, boardFull, tieGame };
