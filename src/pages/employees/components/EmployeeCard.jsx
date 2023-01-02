import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export function EmployeeCard({ employee }) {
  return (
    <div
      size="small"
      key={employee.EnrollNum}
      className="flex justify-between items-center bg-white p-3 rounded w-full h-full shadow-md"
    >
      <div className="bg-sky-600 h-full w-2/5 rounded flex flex-col justify-center items-center p-1">
        <p className="text-white font-bold">{employee.EnrollNum}</p>
        <Avatar shape="circle" size={54} icon={<UserOutlined />} />
      </div>
      <div className="text-right w-3/5">
        <p className="m-0 p-0 font-bold">Kyaw Thuya Naing</p>
        <p className="m-0 p-0 text-gray-600 text-xs font-bold">
          Sales Executive
        </p>
        <p className="mt-2 mb-0 p-0 text-gray-600">{employee.PhoneNo}</p>
        <p className="m-0 p-0 text-gray-600 text-sm">test@gmail.com</p>
        <p className="mt-2 mb-0 p-0 font-semibold text-xs">{`${
          employee.CurrentAddress.adress ?? ""
        } ,${employee.CurrentAddress.township ?? ""}, ${
          employee.CurrentAddress.city ?? ""
        }`}</p>
      </div>
    </div>
  );
}
