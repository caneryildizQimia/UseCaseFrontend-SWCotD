import React from "react";
import InfoItem from "./infoItem";

interface Character {
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

interface CharacterInfoProps {
  character: Character;
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ character }) => {
  return (
    <div>
      <h3 className="mb-2 text-3xl text-yellow uppercase">Personal Info</h3>
      <ul className="grid gap-y-1 capitalize">
        <InfoItem label="Height" value={`${character.height} cm`} />
        <InfoItem label="Mass" value={`${character.mass} kg`} />
        <InfoItem label="Hair Color" value={character.hair_color} />
        <InfoItem label="Eye Color" value={character.eye_color} />
        <InfoItem label="Birth Year" value={character.birth_year} />
        <InfoItem label="Gender" value={character.gender} />
      </ul>
    </div>
  );
};

export default CharacterInfo;
