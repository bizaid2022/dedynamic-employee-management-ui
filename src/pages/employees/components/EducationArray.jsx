import { Button, Col, Row } from "antd";
import { FieldArray } from "formik";
import React from "react";
import DatePickerField from "../../../components/fields/DatePickerField";
import Field from "../../../components/fields/Field";
import SelectField from "../../../components/fields/SelectField";
// import SelectField from "../../../components/fields/SelectField";

export function EducationArray({ values, name }) {
  const cityOptions = [
    {
      label: "Yangon",
      value: 1,
    },
    {
      label: "Mandalay",
      value: 2,
    },
    {
      label: "Bago",
      value: 3,
    },
    {
      label: "Pyin Oo Lwin",
      value: 4,
    },
  ];
  return (
    <FieldArray
      name="educations"
      render={(arrayHelpers) => (
        <div>
          {values.educations &&
            values.educations.length > 0 &&
            values.educations.map((experience, index) => (
              <div key={index} className="lastChildBorder">
                <Row gutter={24}>
                  <Col span={24}>
                    <Field
                      name={`${name}[${index}].EdName`}
                      id={`${name}[${index}].EdName`}
                      label="Name"
                      isRequired
                    />
                  </Col>
                  <Col span={24}>
                    <Field
                      name={`${name}[${index}].NameofUni`}
                      id={`${name}[${index}].NameofUni`}
                      label="University Name"
                      isRequired
                    />
                  </Col>
                  <Col span={12}>
                    <DatePickerField
                      name={`${name}[${index}].FromDate`}
                      id={`${name}[${index}].FromDate`}
                      showToday={false}
                      label="From Date"
                    />
                  </Col>
                  <Col span={12}>
                    <DatePickerField
                      name={`${name}[${index}].ToDate`}
                      id={`${name}[${index}].ToDate`}
                      showToday={false}
                      label="To Date"
                    />
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={17}>
                    <SelectField
                      label="City"
                      name={`${name}[${index}].CityId`}
                      id={`${name}[${index}].CityId`}
                      defaultValue={1}
                      className="w-full"
                      options={cityOptions}
                    />
                  </Col>
                  <Col span={7}>
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
