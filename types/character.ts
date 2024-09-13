import { Species } from "./species";
import { Starship } from "./starship";
import { Vehicle } from "./vehicle";

export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string; // Can be a URL or fetched object
    films: string[]; // URLs to films
    species: (string | Species)[]; // URLs or fetched species objects
    vehicles: (string | Vehicle)[]; // URLs or fetched vehicle objects
    starships: (string | Starship)[]; // URLs or fetched starship objects
    created: string;
    edited: string;
    url: string;
  }