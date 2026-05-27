import type { State } from "./state.js";

export async function commandHelp(state: State): Promise<void> {
  console.log(`Welcome to the Pokedex!
Usage:

${Object.values(state.cliCommands)
      .map((command) => `${command.name}: ${command.description}`)
      .join("\n")}`);
}