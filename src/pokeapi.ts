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

export type Location = {
  id: number;
  name: string;
  url: string;
};