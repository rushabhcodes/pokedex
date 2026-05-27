import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
  readlineInterface: Interface;
  cliCommands: Record<string, CLICommand>;
  PokeAPI?: PokeAPI;
  nextLocationsURL?: string;
  prevLocationsURL?: string;
};

export const initState = (): State => {
  const readlineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  return {
    readlineInterface,
    cliCommands: getCommands(),
    PokeAPI: new PokeAPI(),
    nextLocationsURL: undefined,
    prevLocationsURL: undefined,
  };
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};



