import { writable, derived } from "svelte/store";
import { TicTacToe } from "./board";

const game = writable({});

const turn = writable("");

/**
 * winner is null while no player has won
 * If a player wins, then winner==="X" or "O" accordingly
 */
let oldWinner;
const winner = derived(game, _game => {
    const result = _game && _game.getWinner && _game.getWinner();
    console.log("REEVALUATING WINNER   ", result !== oldWinner ? " *** CHANGED! *** " : " still ", result);
    oldWinner = result;
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
 * tieGame is true if and only if there hasn't been a winner,
 * and all the board has been filled.
 *
 * IT IS SUPPOSED TO BE AUTOMATICALLY DERIVED FROM THE PREVIOUS
 * winner AND boardFull VARIABLES, BUT THIS SOMEHOW DOESN'T WORK!
 */
let oldTieGame;
const tieGame = derived([winner, boardFull], ([_winner, _boardFull]) => {
    const result = _boardFull && _winner === null;
    console.log("REEVALUATING TIEGAME  ", result !== oldTieGame ? " *** CHANGED! *** " : " still ", result);
    oldTieGame = result;
    return result;
});

export { game, turn, winner, boardFull, tieGame };
