import { Species } from "@/types/species";
import Tooltip from "./tooltip";
import React from "react"; 

interface SpeciesListProps {
  species: (Species | string)[];
}

export default function SpeciesList({ species }: SpeciesListProps) {

  return (
    <>
      {species.length > 0 ? (
        <ul className="text-white space-y-1 ml-6">
          {species.map(
            (speciesItem, index) =>
              typeof speciesItem !== "string" && (
                <li
                  key={index}
                  className="cursor-pointer yellow-square-bullet transition-colors duration-400"
                >
                  <Tooltip
                    key={index}
                    content={
                      <div className="text-black capitalize">
                        <p>
                          <strong>Classification:</strong>{" "}
                          {speciesItem.classification}
                        </p>
                        <p>
                          <strong>Designation:</strong>{" "}
                          {speciesItem.designation}
                        </p>
                        <p>
                          <strong>Language:</strong> {speciesItem.language}
                        </p>
                      </div>
                    }
                  >
                    {speciesItem.name}
                  </Tooltip>
                </li>
              )
          )}
        </ul>
      ) : (
        <p>No species information available</p>
      )}
    </>
  );
}
