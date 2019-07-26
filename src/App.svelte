<script>
    import Board from "./Board.svelte";
    import { TicTacToe } from "./board";
    import { game, turn, winner, tieGame, boardFull } from "./store";

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
        if ($winner) {
            return [`${$winner} wins!`, true];
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
winner=
<b>{$winner}</b>
(should be null while nobody wins)
<br />
boardFull=
<b>{$boardFull}</b>
(should be false unless all the board is filled in)
<br />
tieGame=
<b>{$tieGame}</b>
(should be true if the game is ended with no winner)
