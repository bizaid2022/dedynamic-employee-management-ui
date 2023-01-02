import { Col, Form, Row } from "antd";
import React from "react";
import Field from "../../../components/fields/Field";
import NumberField from "../../../components/fields/NumberField";
import SelectField from "../../../components/fields/SelectField";

export function PositionForm({ name, onSubmit }) {
  const departmentOptions = [
    { label: "Department 1", value: 1 },
    { label: "Department 2", value: 2 },
    { label: "Department 3", value: 3 },
  ];
  return (
    <Form name={name} onFinish={onSubmit}>
      <Row gutter={24}>
        <Col span={24}>
          <SelectField
            name="department"
            label="Department"
            options={departmentOptions}
            noLable={false}
          />
        </Col>
        <Col span={24}>
          <Field name="label" placeholder="Position Name" label="Name" />
        </Col>
        <Col span={24}>
          <NumberField
            name="level"
            placeholder="1"
            label="Level"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </Form>
  );
}
