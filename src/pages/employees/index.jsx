import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmployees } from "../../services/employeeSlice";
import { EmployeeActionBar } from "./components/EmployeeActionBar";
import { EmployeeView } from "./components/EmployeeView";

export function Employees() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl m-0">Employees List</h1>
        <EmployeeActionBar />
      </div>
      <EmployeeView />
    </div>
  );
}
