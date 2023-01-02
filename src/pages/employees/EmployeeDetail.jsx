import { Col, Row } from "antd";
import React from "react";
import { DetailTaskList } from "./components/DetailTaskList";
import { EmployeeInfo } from "./components/EmployeeInfo";

export function EmployeeDetail() {
  return (
    <div>
      <h1 className="font-semibold text-lg mt-0 mb-2">Detail Information</h1>
      <Row gutter={24}>
        <Col span={6}>
          <EmployeeInfo />
        </Col>
        <Col span={18}>
          <h1 className="m-0 mb-1 text-sm p-0 font-semibold">Task Records</h1>
          <DetailTaskList />
        </Col>
      </Row>
    </div>
  );
}
