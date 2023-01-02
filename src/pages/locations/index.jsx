import React from "react";
import { LocationActionBar } from "./components/LocationActionBar";
import { LocationTable } from "./components/LocationTable";

export function Locations() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl m-0">Locations List</h1>
        <LocationActionBar />
      </div>
      <LocationTable />
    </div>
  );
}
