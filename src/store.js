import { writable } from "svelte/store";

export const game = writable([]);
export const message = writable("");
export const done = writable(false);
export const turn = writable("");
