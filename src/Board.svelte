<script>
    export let game; // define a prop
    export let clickCell;
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
                {#each row as column, columnIndex}
                    <td on:click={clickCell.bind(null, rowIndex, columnIndex)}>{column}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
