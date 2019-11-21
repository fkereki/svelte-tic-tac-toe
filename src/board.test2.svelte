<script>
    import Board from "./board";
    export let game;
    export let onPlayed;
</script>

<style>

</style>

<h2>See console for output:</h2>
<Board {game} on:played={onPlayed} />
