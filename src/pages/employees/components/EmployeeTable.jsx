import React from "react";
import { Avatar, Image, Switch, Table } from "antd";
import _ from "lodash";
import { UserOutlined } from "@ant-design/icons";

export function EmployeeTable({ data }) {
  const dataSource = _.map(data, (d) => ({
    key: d.EmpId,
    enrollNum: d.EnrollNum,
    age: d.Age,
    parmenentAddress: d.ParmenentAddress,
    currentAddress: d.CurrentAddress,
    dateofBirth: d.DateofBirth,
    education: d.Education,
    empId: d.EmpId,
    experiences: d.Experiences,
    fatherName: d.FatherName,
    gender: d.Gender,
    info: d.Info,
    maritalStatus: d.MaritalStatus,
    nrcNo: d.NRCNo,
    name: d.Name,
    parmenentAddressId: d.ParmenentAddressId,
    phoneNo: d.PhoneNo,
    qualification: d.Qualification,
    race: d.Race,
    religion: d.Religion,
  }));

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "EmpId",
      align: "center",
      width: 100,
      render: (text, record) => (
        <div className="flex justify-center items-center">
          {record.image ? (
            <Image src={record.image} />
          ) : (
            <Avatar
              icon={<UserOutlined />}
              size={40}
              className="bg-sky-300 flex justify-center items-center"
            />
          )}
        </div>
      ),
    },
    {
      title: "Enroll Number",
      dataIndex: "enrollNum",
      key: "enrollNum",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "EmpId",
    },
    {
      title: "Date Of Birth",
      dataIndex: "dateofBirth",
      key: "EmpId",
    },
    {
      title: "NRC",
      dataIndex: "nrcNo",
      key: "EmpId",
    },
    // {
    //   title: "Position",
    //   dataIndex: "position",
    //   key: "position",
    // },
    // {
    //   title: "Department",
    //   dataIndex: "department",
    //   key: "department",
    // },
    {
      title: "Phone Number",
      dataIndex: "phoneNo",
      key: "EmpId",
    },
    {
      title: "Race",
      dataIndex: "race",
      key: "EmpId",
    },
    {
      title: "Current Address",
      dataIndex: "currentAddress",
      key: "EmpId",
      render: (text) => (
        <div>
          <p>{`${text.adress ?? ""} ,${text.township ?? ""}, ${
            text.city ?? ""
          }`}</p>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "EmpId",
      render: (text) => <Switch defaultChecked={true} size="small" />,
    },
  ];
  return (
    <div className="mt-5">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
