import { Col, Form, Row } from "antd";
import React from "react";
import Field from "../../../components/fields/Field";
import SelectField from "../../../components/fields/SelectField";

export function DepartmentForm({ name, onSumbit }) {
  return (
    <Form name={name} onFinish={onSumbit}>
      <Row gutter={24} className="space-y-1">
        <Col span={24}>
          <Field name="name" label="Name" />
        </Col>
        <Col span={24}>
          <SelectField name="address" label="Location" />
        </Col>
      </Row>
    </Form>
  );
}
