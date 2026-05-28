import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
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
    mapb: {
      name: "mapb",
      description: "Displays list of locations and the pokemon that can be found there (backwards)",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Explores a location and lists the pokemon that can be found there. Usage: explore <location_name>",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Attempts to catch a pokemon. Usage: catch <pokemon_name>",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspects a pokemon and displays its details. Usage: inspect <pokemon_name>",
      callback: commandInspect, 
    },
    help: {
      name: "help",
      description: "Displays this help message",
      callback: commandHelp,
    }
  };
}