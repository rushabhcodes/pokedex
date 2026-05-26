import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
}

export function startREPL(state: State): void {
  const { readlineInterface, cliCommands } = state;

  readlineInterface.on("line", (line) => {
    const input = cleanInput(line);
    if (input.length === 0) {
      readlineInterface.prompt();
      return;
    }

    const commandName = input[0];
    const command = cliCommands[commandName];
    if (command) {
      command.callback(state);
    } else {
      console.log(`Unknown command: ${commandName}`);
    }

    readlineInterface.prompt();
  });
}

