import { decorate } from "@storybook/addon-actions";

import Board from "./board.svelte";
import MyNewBoard from "./board.test2.svelte";
import { TicTacToe } from "./ticTacToe.class";

const game = new TicTacToe();
const onPlayed = decorate([x => [x[0].detail]]).action("played!");
const onPlayed2 = e => window.console.log("clickity!", e.detail);

export default { title: "Board" };

export const BoardWithActions = () => ({
    Component: Board,
    props: {
        game
    },
    on: {
        played: onPlayed
    }
});

export const BoardWithConsole = () => ({
    Component: MyNewBoard,
    props: {
        game
    },
    on: {
        played: onPlayed2
    }
});
