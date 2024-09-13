"use client";

import React, { useState } from "react";
import { Character } from "@/types/character";
import SpeciesList from "./speciesList";
import StarshipsList from "./starshipList";
import VehiclesList from "./vehiclesList";

type TabData = {
  label: string;
  content: React.ReactNode;
};

const Tab = ({ character }: { character: Character }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: TabData[] = [
    { label: "Species", content: <SpeciesList species={character.species} /> },
    {
      label: "Vehicles",
      content: <VehiclesList vehicles={character.vehicles} />,
    },
    {
      label: "Starships",
      content: <StarshipsList starships={character.starships} />,
    },
  ];

  return (
    <>
      <div className="flex xs:flex-col sm:flex-row justify-between items-center border-b pb-2 border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`uppercase   ${
              activeTab === index
                ? "border-b-2  border-yellow text-yellow"
                : "text-white hover:text-yellow"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </>
  );
};

export default Tab;
