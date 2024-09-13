import { Vehicle } from "@/types/vehicle";
import Tooltip from "./tooltip";
import React from "react"; 

interface VehiclesListProps {
  vehicles: (Vehicle | string)[];
}
export default function VehiclesList({ vehicles }: VehiclesListProps) {
  return (
    <>
      {" "}
      {vehicles.length > 0 ? (
        <ul className="space-y-1 flex flex-col ml-6">
          {vehicles.map(
            (vehicleItem, index) =>
              typeof vehicleItem !== "string" && (
                <li
                  key={index}
                  className="cursor-pointer yellow-square-bullet   transition-colors duration-200"
                >
                  <Tooltip
                    content={
                      <div className="text-black">
                        <p>
                          <strong>Model:</strong> {vehicleItem.model}
                        </p>
                        <p>
                          <strong>Manufacturer:</strong>{" "}
                          {vehicleItem.manufacturer}
                        </p>
                        <p>
                          <strong>Cost:</strong> {vehicleItem.cost_in_credits}{" "}
                          credits
                        </p>
                      </div>
                    }
                  >
                    {vehicleItem.name}
                  </Tooltip>
                </li>
              )
          )}
        </ul>
      ) : (
        <p>No vehicles information available</p>
      )}
    </>
  );
}
