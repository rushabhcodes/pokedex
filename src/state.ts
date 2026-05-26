import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";

export type State = {
  readlineInterface: Interface;
  cliCommands: Record<string, CLICommand>;
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
  };
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};



