<script>
    import Board from "./Board.svelte";
    import { TicTacToe } from "./board";
    import { message, game, done, turn } from "./store";

    createGame();

    function createGame() {
        $message = "";
        $done = false;
        $turn = "X";
        $game = new TicTacToe();
    }

    function onPlayed(event) {
        $game.click(event.detail.rowIndex, event.detail.colIndex, $turn);
        $turn = $turn === "X" ? "O" : "X";
        $game = $game; // needed for reactivity

        const winner = $game.getWinner();
        if (winner) {
            $message = `${winner} wins!`;
            $done = true;
        } else if ($game.isBoardFull()) {
            $message = `Tie game!`;
            $done = true;
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
    <h2>{$message}</h2>
{/if}

<Board game={$game} on:played={onPlayed} />
