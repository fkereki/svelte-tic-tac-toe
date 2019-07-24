<script>
    export let game; // define a prop

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<style>
    table {
        border-collapse: collapse;
        font-size: 4em;
    }

    td {
        border: 1px solid #999;
        text-align: center;
        height: 1.5em;
        width: 1.5em;
    }
</style>

<table>
    <tbody>
        {#each game.board as row, rowIndex}
            <tr>
                {#each row as col, colIndex}
                    <td on:click={dispatch.bind(null, 'played', { rowIndex, colIndex })}>{col}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
