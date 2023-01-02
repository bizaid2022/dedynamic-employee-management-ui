import { Button, Col, Radio, Row } from "antd";
import { FieldArray } from "formik";
import React from "react";
import DatePickerField from "../../../components/fields/DatePickerField";
import Field from "../../../components/fields/Field";
import SelectField from "../../../components/fields/SelectField";
import TextAreaField from "../../../components/fields/TextAreaField";

export function ExperienceArray({ values, name }) {
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

  const townOptions = [
    {
      label: "San Chaung",
      value: 1,
    },
    {
      label: "Kamayut",
      value: 2,
    },
    {
      label: "Dagon",
      value: 3,
    },
    {
      label: "Chan Aye Tharzan",
      value: 4,
    },
  ];
  return (
    <FieldArray
      name="experiences"
      render={(arrayHelpers) => (
        <div>
          {values.experiences &&
            values.experiences.length > 0 &&
            values.experiences.map((experience, index) => {
              return (
                <div key={index} className="lastChildBorder">
                  <Row gutter={24}>
                    <Col span={7}>
                      <Field
                        name={`${name}[${index}].Rank`}
                        id={`${name}[${index}].Rank`}
                        label="Rank"
                        isRequired
                      />
                    </Col>
                    <Col span={7}>
                      <Field
                        name={`${name}[${index}].CompanyInformaiton`}
                        id={`${name}[${index}].CompanyInformaiton`}
                        label="Company Name"
                        isRequired
                      />
                    </Col>
                    <Col span={10}>
                      <div className="flex justify-between m-0">
                        <div style={{ width: "48%" }}>
                          <DatePickerField
                            label="From Date"
                            name={`${name}[${index}].FromDate`}
                            id={`${name}[${index}].FromDate`}
                            showToday={false}
                          />
                        </div>
                        <div style={{ width: "48%" }}>
                          <DatePickerField
                            label="To  Date"
                            name={`${name}[${index}].ToDate`}
                            id={`${name}[${index}].ToDate`}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div style={{ fontWeight: "bold" }}>Company Address</div>
                  <Row gutter={24}>
                    <Col span={8}>
                      <SelectField
                        label="City"
                        name={`${name}[${index}].CmpyCityId`}
                        id={`${name}[${index}].CmpyCityId`}
                        defaultValue={1}
                        className="w-full"
                        onChange={() => {}}
                        options={cityOptions}
                      />
                    </Col>
                    <Col span={8}>
                      <SelectField
                        label="Township"
                        name={`${name}[${index}].CmpyTspId`}
                        id={`${name}[${index}].CmpyTspId`}
                        defaultValue={1}
                        className="w-full"
                        onChange={() => {}}
                        options={townOptions}
                      />
                    </Col>
                    <Col span={8}>
                      <TextAreaField
                        label="Company Address"
                        name={`${name}[${index}].CmpyNoAndStreet`}
                        id={`${name}[${index}].CmpyNoAndStreet`}
                        rows={2}
                        placeholder="No.(x), xxx Street, near xxx"
                      />
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col span={8}>
                      <TextAreaField
                        label="Reason of Resign"
                        name={`${name}[${index}].ReasonofResign`}
                        id={`${name}[${index}].ReasonofResign`}
                        rows={3}
                      />
                    </Col>
                    <Col span={8}>
                      <label style={{ marginBottom: 10 }}>
                        Skills Verified
                      </label>
                      <Radio.Group onChange={() => {}} value="">
                        <Radio value={1}>Still Screening</Radio>
                        <Radio value={2}>Verified</Radio>
                      </Radio.Group>
                    </Col>
                    <Col span={8}>
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
              );
            })}
        </div>
      )}
    />
  );
}
