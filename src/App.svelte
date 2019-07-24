<script>
    import Board from "./Board.svelte";
    import { TicTacToe } from "./board";
    import { game, turn } from "./store";

    let message = ``;
    let done = false;

    $: [message, done] = (() => {
        const winner = $game.getWinner();
        if (winner) {
            return [`${winner} wins!`, true];
        } else if ($game.isBoardFull()) {
            return [`Tie game!`, true];
        } else {
            return [``, false];
        }
    })();

    createGame();

    function createGame() {
        $turn = "X";
        $game = new TicTacToe();
    }

    function onPlayed(event) {
        if (!done) {
            $game.click(event.detail.rowIndex, event.detail.colIndex, $turn);
            $turn = $turn === "X" ? "O" : "X";
            $game = $game; // needed for reactivity
        }
    }
</script>

<style>
    h2 {
        display: inline;
    }
</style>

<svelte:head>
    <title>Tic Tac Toe</title>
</svelte:head>

<h1>Tic Tac Toe</h1>

<button on:click={createGame}>New Game</button>

{#if message}
    <h2>{message}</h2>
{/if}

<Board game={$game} on:played={onPlayed} />
