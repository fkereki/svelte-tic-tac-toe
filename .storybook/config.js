import { configure } from "@storybook/svelte";

configure(require.context("../src", true, /\.story\.js$/), module);
