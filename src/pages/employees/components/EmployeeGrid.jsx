import { Button, Col, Empty, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { EmployeeCard } from "./EmployeeCard";

export function EmployeeGrid({ data }) {
  const navigate = useNavigate();
  return _.isEmpty(data) ? (
    <div
      className="flex justify-center items-center bg-white my-5 mx-3 rounded-lg"
      style={{
        height: "66vh",
      }}
    >
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 80,
        }}
        description={
          <p className="text-large text-gray-600 font-bold">
            Employee Data is Empty
          </p>
        }
      >
        <Button
          type="primary"
          onClick={() => navigate("/auth/employees/create")}
        >
          Create Now
        </Button>
      </Empty>
    </div>
  ) : (
    <Row gutter={24} className="my-5">
      {_.map(data, (d) => (
        <Col span={6} key={d.EnrollNum} className="mb-2">
          <EmployeeCard employee={d} />
        </Col>
      ))}
    </Row>
  );
}
