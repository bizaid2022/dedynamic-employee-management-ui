import React from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

export function EmployeeActionBar() {
  const { Search } = Input;
  const navigate = useNavigate();
  return (
    <div className="flex items-center space-x-2">
      <Search placeholder="Search by Name" style={{ width: "100%" }} />
      <Button onClick={() => navigate("/auth/employees/create")} type="primary">
        + New
      </Button>
    </div>
  );
}
