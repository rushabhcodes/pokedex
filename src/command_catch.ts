import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    try {
        console.log(`Throwing a Pokeball at ${args[0]}...`);
        const pokemon = await state.PokeAPI?.fetchPokemon(args[0]);
        if (!pokemon) {
            console.log(`${args[0]} escaped!`);
            return;
        }
        console.log(`${pokemon?.name} was caught!`);
    }
    catch (error) {
        console.error("Error catching Pokemon:", error);
    }
}