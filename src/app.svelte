<script>
    import Board from "./board.svelte";
    import Derived from "./derived.svelte";
    import { TicTacToe } from "./ticTacToe.class";

    import { game, turn, tieGame, whoWins } from "./store";

    import * as STORE from "./store";
    window.STORE = STORE;

    let finalResult = ``;
    let gameEnded = false;

    function createGame() {
        $turn = "X";
        $game = new TicTacToe();
    }

    function onPlayed(event) {
        if (!gameEnded) {
            $game.click(event.detail.rowIndex, event.detail.colIndex, $turn);
            $turn = $turn === "X" ? "O" : "X";
            $game.board = $game.board; // for reactivity
        }
    }

    createGame();

    $: [finalResult, gameEnded] = (() => {
        if ($whoWins) {
            return [`${$whoWins} wins!!`, true];
        } else if ($tieGame) {
            return [`Tie game!`, true];
        } else {
            return [``, false];
        }
    })();
</script>

<style>

</style>

<svelte:head>
    <title>Tic Tac Toe</title>
</svelte:head>

<h1>Tic Tac Toe</h1>
<button on:click={createGame}>New Game</button>
{#if finalResult}
    <h2 style="display:inline;">{finalResult}</h2>
{/if}
<Board game={$game} on:played={onPlayed} />
<Derived />
