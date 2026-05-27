export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const location =  await fetch(pageURL ?? `${PokeAPI.baseURL}/location-area`)
    return location.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const location= await fetch(`${PokeAPI.baseURL}/location/${locationName}`)
    return location.json();
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