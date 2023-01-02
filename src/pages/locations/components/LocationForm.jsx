import { Col, Form, Row } from "antd";
import React from "react";
import Field from "../../../components/fields/Field";
import SelectField from "../../../components/fields/SelectField";
import TextAreaField from "../../../components/fields/TextAreaField";

export function LocationForm() {
  return (
    <Form>
      <Row gutter={24}>
        <Col span={24}>
          <Field name="name" label="Name" />
        </Col>
        <Col span={12}>
          <SelectField name="city" label="City" />
        </Col>
        <Col span={12}>
          <SelectField name="tsp" label="Township" />
        </Col>
        <Col span={12}>
          <TextAreaField
            name="no&Street"
            label="Number & Street"
            placeholder="No (x), xxxxx Street"
          />
        </Col>
      </Row>
    </Form>
  );
}
