import React from "react";
import { DepartmentActionBar } from "./components/DepartmentActionBar";
import { DepartmentTable } from "./components/DepartmentTable";

export function Departments() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl m-0">Departments List</h1>
        <DepartmentActionBar />
      </div>
      <DepartmentTable />
    </div>
  );
}
