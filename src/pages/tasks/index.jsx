import { Table } from "antd";
import React from "react";
import { TaskActionBar } from "./components/TaskActionBar";

export function Task() {
  const dataSource = [];

  const columns = [
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
    },
    {
      title: "Mobile / Web",
      dataIndex: "MobileOrWeb",
      key: "MobileOrWeb",
    },
    {
      title: "Employee",
      dataIndex: "employee",
      key: "employee",
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
      key: "createdDate",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-semibold text-xl m-0">Tasks List</h1>
        <TaskActionBar />
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
