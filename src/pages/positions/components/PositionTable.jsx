import { Table } from "antd";
import React from "react";

export function PositionTable() {
  const dataSource = [];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
  ];
  return (
    <div className="mt-5">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
