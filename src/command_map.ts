import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  try {
    const locations = await state.PokeAPI?.fetchLocations(state.nextLocationsURL);
    if (!locations) {
      return;
    }
    locations.results.forEach((location) => {
      console.log(location.name);
    });
    state.nextLocationsURL = locations.next ?? undefined;
    state.prevLocationsURL = locations.previous ?? undefined;
  } catch (error) {
    console.error("Error fetching locations:", error);
  }
}