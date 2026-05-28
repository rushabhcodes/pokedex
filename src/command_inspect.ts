import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    try {
        console.log(`Inspecting ${args[0]}...`);
        const pokemon = await state.PokeAPI?.fetchPokemon(args[0]);
        if (!pokemon) {
            console.log(`${args[0]} not caught yet!`);
            return;
        }
        console.log(`Name: ${pokemon.name}`);
        console.log(`Height: ${pokemon.height}`);
        console.log(`Weight: ${pokemon.weight}`);
        console.log(`Base Experience: ${pokemon.base_experience}`);
        console.log(`Types: ${pokemon.types.map(t => t.type.name).join(", ")}`);
        console.log("Stats:");
        pokemon.stats.forEach(stat => {
            console.log(` -${stat.stat.name}: ${stat.baseStat} (effort: ${stat.effort})`);
        });
        
    }
    catch (error) {
        console.error("Error inspecting Pokemon:", error);
    }
}