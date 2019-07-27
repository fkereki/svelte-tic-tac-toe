import { writable, derived } from "svelte/store";
import { TicTacToe } from "./board";

const game = writable({});

const turn = writable("");

/**
 * whoWins is null while no player has won
 * If a player wins, then whoWins==="X" or "O" accordingly
 */
let oldwhoWins;
const whoWins = derived(game, _game => {
    const result = _game && _game.getwhoWins && _game.getwhoWins();
    console.log("REEVALUATING WHOWINS  ", result !== oldwhoWins ? " *** CHANGED! *** " : " still ", result);
    oldwhoWins = result;
    return result;
});

/**
 * boardFull is true if and only if all the board has been filled
 */
let oldBoardFull;
const boardFull = derived(game, _game => {
    const result = _game && _game.isBoardFull && _game.isBoardFull();
    console.log("REEVALUATING BOARDFULL", result !== oldBoardFull ? " *** CHANGED! *** " : " still ", result);
    oldBoardFull = result;
    return result;
});

/**
 * tieGame is true if and only if the board has been filled,
 * and there hasn't been a winner (whoWins===null)
 *
 * IT IS SUPPOSED TO BE AUTOMATICALLY DERIVED FROM THE PREVIOUS
 * whoWins AND boardFull VARIABLES, BUT THIS SOMEHOW DOESN'T WORK!
 */
let oldTieGame;
const tieGame = derived([whoWins, boardFull], ([_whoWins, _boardFull]) => {
    const result = _boardFull && _whoWins === null;
    console.log("REEVALUATING TIEGAME  ", result !== oldTieGame ? " *** CHANGED! *** " : " still ", result);
    oldTieGame = result;
    return result;
});

export { game, turn, whoWins, boardFull, tieGame };
