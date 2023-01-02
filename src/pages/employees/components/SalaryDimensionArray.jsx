import { Button, Col, Row } from "antd";
import { FieldArray } from "formik";
import React from "react";
import Field from "../../../components/fields/Field";

export function SalaryDimension({ values, name }) {
  return (
    <FieldArray
      name="dimensions"
      render={(arrayHelpers) => (
        <div>
          {values.dimensions &&
            values.dimensions.length > 0 &&
            values.dimensions.map((experience, index) => (
              <div key={index} className="lastChildBorder">
                <Row gutter={24}>
                  <Col span={7}>
                    <Field
                      name={`${name[index]}.name`}
                      id={`${name[index]}.name`}
                      label="Name"
                      isRequired
                    />
                  </Col>
                  <Col span={7}>
                    <Field
                      name={`${name[index]}.value`}
                      id={`${name[index]}.value`}
                      label="Value"
                      isRequired
                    />
                  </Col>
                  <Col span={10}>
                    <Button
                      type="primary"
                      danger
                      className="mt-5"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
        </div>
      )}
    />
  );
}
