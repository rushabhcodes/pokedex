import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { CLICommand } from "./state.js";


export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Displays list of locations and the pokemon that can be found there",
      callback: commandMap,
    },
    mapb : {
      name: "mapb",
      description: "Displays list of locations and the pokemon that can be found there (backwards)",
      callback: commandMapb,
    },
    help: {
      name: "help",
      description: "Displays this help message",
      callback: commandHelp,
    }
  };
}