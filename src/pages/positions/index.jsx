import React from "react";
import { PositionActionBar } from "./components/PositionActionBar";
import { PositionTable } from "./components/PositionTable";

export function Positions() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl m-0">Positions List</h1>
        <PositionActionBar />
      </div>
      <PositionTable />
    </div>
  );
}
