import { Table } from "antd";
import React from "react";

export function DetailTaskList() {
  const dataSource = [];

  const columns = [
    {
      title: "TaskID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
    },
    {
      title: "Mobile/Web",
      dataIndex: "mobileOrWeb",
      key: "mobileOrWeb",
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
}
