import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
}

export async function startREPL(state: State): Promise<void> {
  const { readlineInterface, cliCommands } = state;

  readlineInterface.prompt();

  for await (const line of readlineInterface) {
    const input = cleanInput(line);
    if (input.length === 0) {
      readlineInterface.prompt();
      continue;
    }

    const commandName = input[0];
    const command = cliCommands[commandName];
    if (command) {
      try {
        await command.callback(state);
      } catch (error) {
        console.error("Error running command:", error);
      }
    } else {
      console.log(`Unknown command: ${commandName}`);
    }

    readlineInterface.prompt();
  }
}

