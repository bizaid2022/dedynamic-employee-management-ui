import { Table } from "antd";
import React from "react";

export function DepartmentTable() {
  const dataSource = [];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div className="mt-5">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
