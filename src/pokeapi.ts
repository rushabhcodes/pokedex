import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache: Cache;

  constructor() {
    this.#cache = new Cache(1000 * 60 * 60); // 1 hour
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    const cached = this.#cache.get<ShallowLocations>(url);
    if (cached) return cached;

    const locations = await fetch(url);
    const json = await locations.json();
    this.#cache.add(url, json);
    return json;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cached = this.#cache.get<Location>(url);
    if (cached) return cached;

    const location = await fetch(url);
    const json = await location.json();
    this.#cache.add(url, json);
    return json;
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon | null> {
    let canBeCatched = Math.random() < 0.5;
    if (!canBeCatched) {
      return null;
    }

    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    const cached: Pokemon | null = this.#cache.get<Pokemon>(pokemonName);
    if (cached) return cached;

    const pokemon = await fetch(url);
    const json: Pokemon = await pokemon.json();
    this.#cache.add(pokemonName, json);
    return json;
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export interface Location {
  encounter_method_rates: {
    encounter_method: {
      name: string
      url: string
    }
    version_details: {
      rate: number
      version: {
        name: string
        url: string
      }
    }[]
  }[]
  game_index: number
  id: number
  location: {
    name: string
    url: string
  }
  name: string
  names: {
    language: {
      name: string
      url: string
    }
    name: string
  }[]
  pokemon_encounters: {
    pokemon: {
      name: string
      url: string
    }
    version_details: {
      encounter_details: {
        chance: number
        condition_values: any[]
        max_level: number
        method: {
          name: string
          url: string
        }
        min_level: number
      }[]
      max_chance: number
      version: {
        name: string
        url: string
      }
    }[]
  }[]
}

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  stats: Stat[];
  types: Type[];
};

export interface Stat {
  baseStat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface Species {
  name: string;
  url: string;
}