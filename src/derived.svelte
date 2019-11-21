<script>
    import { game, whoWins, tieGame, boardFull } from "./store";

    /*
    A way to avoid using derived()

    1. Create a Svelte component which has no style and no visible html
    2. In its script, add all the derived rules that you need
    3. Include the component at the highest level of the app, where it will always be present
    4. Done!
*/

    $: $whoWins = $game && $game.getwhoWins && $game.getwhoWins();

    $: $tieGame = $boardFull && $whoWins === null;
</script>

<style>

</style>

XXX
