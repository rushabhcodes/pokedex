import { createInterface } from "readline";

import { getCommands } from "./command.js";

export function cleanInput(input: string): string[] {
  return input.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
}




export const startREPL = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});

startREPL.on("line", (line) => {
  const commands = getCommands();
  const input = cleanInput(line);
  if (input.length === 0) {
    startREPL.prompt();
    return;
  }
  const commandName = input[0];
  const command = commands[commandName];
  if (command) {
    command.callback(commands);
  } else {
    console.log(`Unknown command: ${commandName}`);
  }
  startREPL.prompt();
});

