import { Segmented, Skeleton } from "antd";
import React, { useState } from "react";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { EmployeeTable } from "./EmployeeTable";
import { EmployeeGrid } from "./EmployeeGrid";
import { useSelector } from "react-redux";
import { employeeSelector } from "../../../services/employeeSlice";

export function EmployeeView() {
  const [view, setView] = useState("list");
  const [loading, setLoading] = useState(false);

  const { data, isPending } = useSelector(employeeSelector);

  return (
    <div className="mt-2">
      <Segmented
        className="shadow"
        onChange={(value) => {
          setLoading(true);
          setView(value);
          setTimeout(() => setLoading(false), 400);
        }}
        options={[
          {
            label: "List",
            value: "list",
            icon: <BarsOutlined className="mr-2 text-sky-600" />,
          },
          {
            label: "Grid",
            value: "grid",
            icon: <AppstoreOutlined className="mr-2 text-sky-600" />,
          },
        ]}
      />
      {isPending || loading ? (
        <div
          className="flex justify-center items-center my-5 mx-3 rounded-lg"
          style={{
            height: "50vh",
          }}
        >
          <Skeleton loading={isPending || loading} />
        </div>
      ) : view === "list" ? (
        <EmployeeTable data={data} />
      ) : (
        <EmployeeGrid data={data} />
      )}
    </div>
  );
}
