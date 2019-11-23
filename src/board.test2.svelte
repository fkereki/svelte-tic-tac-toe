<script>
    import Board from "./board";
    export let game;
</script>

<style>

</style>

<!--
    on:played means the event is forwarded up
-->
<h2>See console for output:</h2>
<Board {game} on:played />
