import React from "react";
import { Starship } from "@/types/starship";
import Tooltip from "./tooltip";

interface StarshipsListProps {
  starships: (Starship | string)[];
}

export default function StarshipsList({ starships }: StarshipsListProps) {
  return (
    <>
      {starships.length > 0 ? (
        <ul className="space-y-1 flex flex-col ml-6">
          {starships.map(
            (starshipItem, index) =>
              typeof starshipItem !== "string" && (
                <li
                  key={index}
                  className="cursor-pointer text-white yellow-square-bullet hover:text-yellow transition-colors duration-400"
                >
                  <Tooltip
                    key={index}
                    content={
                      <div className="text-black">
                        <p>
                          <strong>Model:</strong> {starshipItem.model}
                        </p>
                        <p>
                          <strong>Hyperdrive Rating:</strong>{" "}
                          {starshipItem.hyperdrive_rating}
                        </p>
                        <p>
                          <strong>Starship Class:</strong>{" "}
                          {starshipItem.starship_class}
                        </p>
                        <p>
                          <strong>Max Atmosphering Speed:</strong>{" "}
                          {starshipItem.max_atmosphering_speed}
                        </p>
                        <p>
                          <strong>Cargo Capacity:</strong>{" "}
                          {starshipItem.cargo_capacity}
                        </p>
                      </div>
                    }
                  >
                    {starshipItem.name}
                  </Tooltip>
                </li>
              )
          )}
        </ul>
      ) : (
        <p>No starships information available</p>
      )}
    </>
  );
}
