<script>
    import Board from "./Board.svelte";
    import { TicTacToe } from "./board";
    import { message } from "./store";
    import { game } from "./store";

    $game = createGame();

    function newGame() {
        $game = createGame();
    }

    function createGame() {
        $message = null;

        return new TicTacToe({
            onWin(winner) {
                $message = `${winner} wins!`;
            },

            onTie() {
                $message = `Tie game!`;
            }
        });
    }

    function onPlayed(event) {
        $game = $game.click(event.detail.rowIndex, event.detail.colIndex);
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

<button on:click={newGame}>New Game</button>

{#if message}
    <h2>{$message}</h2>
{/if}

<Board game={$game} on:played={onPlayed} />
