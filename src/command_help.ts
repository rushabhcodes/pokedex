import type { State } from "./state.js";

export function commandHelp(state: State): void {
  console.log(`Welcome to the Pokedex!
Usage:

${Object.values(state.cliCommands)
      .map((command) => `${command.name}: ${command.description}`)
      .join("\n")}`);
}