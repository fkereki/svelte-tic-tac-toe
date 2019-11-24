import { decorate } from "@storybook/addon-actions";

import Board from "./board.svelte";
import MyNewBoard from "./board.test2.svelte";
import { TicTacToe } from "./ticTacToe.class";

export default { title: "Board" };

export const BoardWithActions = () => ({
    Component: Board,
    props: {
        game: new TicTacToe()
    },
    on: {
        played: decorate([x => [x[0].detail]]).action("played!")
    }
});

export const BoardWithConsole = () => ({
    Component: MyNewBoard,
    props: {
        game: new TicTacToe()
    },
    on: {
        played: e => window.console.log("clickity!", e.detail)
    }
});
