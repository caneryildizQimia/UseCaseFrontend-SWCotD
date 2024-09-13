import { Character } from "@/types/character";
import { Species } from "@/types/species";
import { Starship } from "@/types/starship";
import { Vehicle } from "@/types/vehicle";
const BASE_URL = 'https://swapi.dev/api';

export async function getCharacterOfTheDay(userIdentifier: string | undefined): Promise<Character | null> {
  if(!userIdentifier) return null;
  const TOTAL_CHARACTERS = 83; // Assuming 83 characters available in SWAPI

  // Generate a character ID based on the day of the year and user identifier
  const characterId = (hash(userIdentifier) % TOTAL_CHARACTERS) + 1;

  const character = await fetchCharacter(characterId);

  const speciesData = await fetchDataIfExists<Species>(character.species as string[]);
  const vehiclesData = await fetchDataIfExists<Vehicle>(character.vehicles as string[]);
  const starshipsData = await fetchDataIfExists<Starship>(character.starships as string[]);

  return {
    ...character,
    species: speciesData,
    vehicles: vehiclesData,
    starships: starshipsData
  };
}

async function fetchCharacter(id: number): Promise<Character> {
  const response = await fetch(`${BASE_URL}/people/${id}`);
  if (!response.ok) {
    console.log(response)
  };
  return response.json();
}

async function fetchDataIfExists<T>(urls: string[]): Promise<T[]> {
    if (!urls || urls.length === 0) return [];
  
    const fetchPromises = urls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    });
  
    return Promise.all(fetchPromises);
  }


function hash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}