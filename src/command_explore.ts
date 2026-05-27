import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    try {
        const location = await state.PokeAPI?.fetchLocation(args[0]);
        if (!location) {
            return;
        }
        console.log(`Exploring ${location.name}...`);
        console.log("Found Pokemon:");
        location.pokemon_encounters.forEach((encounter) => {
            console.log(` - ${encounter.pokemon.name}`);
        });
    } catch (error) {
        console.error("Error fetching location details:", error);
    }
}