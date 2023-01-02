import { Table } from "antd";
import React from "react";

export function LocationTable() {
  const dataSource = [];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Township",
      dataIndex: "township",
      key: "township",
    },
    {
      title: "Number & Street",
      dataIndex: "numberAndStreet",
      key: "numberAndStreet",
    },
  ];
  return (
    <div className="mt-5">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
