import { Col, Form, Row } from "antd";
import React from "react";
import Field from "../../../components/fields/Field";
import SelectField from "../../../components/fields/SelectField";

export function TaskForm() {
  return (
    <Form>
      <Row gutter={24}>
        <Col span={24}>
          <Field name="taskName" id="taskName" label="Task Name" />
        </Col>
        <Col span={24}>
          <SelectField
            name="employee"
            id="employee"
            label="Select Employee"
            options={[]}
          />
        </Col>
        <Col span={24}>
          <Field name="MobileOrWeb" id="MobileOrWeb" label="Mobile Or Web" />
        </Col>
      </Row>
    </Form>
  );
}
