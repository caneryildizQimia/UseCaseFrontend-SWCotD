import React from "react"; 
import { Character } from "@/types/character";
import CharacterInfo from "./characterInfo";
import Tab from "./tab";


export default function CharacterCard({
  character,
}: {
  character: Character | null;
}) {
  if (!character) return;

  return (
    <div className="font-goldman text-2xl 3xl:text-3xl  bg-[#131313]  text-white shadow-lg rounded-lg p-6 w-full max-w-5xl 3xl:max-w-6xl">
      <h2 className="text-4xl font-bold mb-4 text-center uppercase">
        {character.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CharacterInfo character={character} />
        <div>
          <Tab character={character} />
        </div>
      </div>
    </div>
  );
}
