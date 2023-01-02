import { Button, Card, Col, Form, Row, Switch } from "antd";
import React from "react";
import SingleUpload from "../../../components/upload/SingleUpload";
import _ from "lodash";
import nrcData from "../../../assets/nrc.json";
import { SaveOutlined } from "@ant-design/icons";
import Field from "../../../components/fields/Field";
import DatePickerField from "../../../components/fields/DatePickerField";
import SelectField from "../../../components/fields/SelectField";
import Label from "../../../components/label/Label";
import { ExperienceArray } from "./ExperienceArray";
import { SalaryDimension } from "./SalaryDimensionArray";
import { EducationArray } from "./EducationArray";
import { SubmitBtn } from "../../../components/buttons/SubmitBtn";
import TextAreaField from "../../../components/fields/TextAreaField";
import RadioField from "../../../components/fields/RadioField";

export function EmployeeForm({
  name,
  handleSubmit,
  values,
  setFieldValue,
  isValid,
}) {
  const numberOptions = [];
  for (let i = 1; i < 15; i++) {
    numberOptions.push({
      label: i,
      value: i,
    });
  }
  const nrcOptions = _.map(nrcData.nrcData, (data) => ({
    label: data.name_en,
    value: data.name_en,
  }));
  const nationalOptions = [{ label: "N", value: "N" }];

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

  const departmentOptions = [
    {
      label: "Department 1",
      value: 1,
    },
    {
      label: "Department 2",
      value: 2,
    },
    {
      label: "Department 3",
      value: 3,
    },
  ];
  const positionOptions = [
    {
      label: "Position 1",
      value: 1,
    },
    {
      label: "Position 2",
      value: 2,
    },
    {
      label: "Position 3",
      value: 3,
    },
  ];
  const locationOptions = [
    {
      label: "Location 1",
      value: 1,
    },
    {
      label: "Location 2",
      value: 2,
    },
    {
      label: "Location 3",
      value: 3,
    },
  ];
  const genderOptions = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  // const companyOptions = [
  //   {
  //     label: "Company 1",
  //     value: 1,
  //   },
  //   {
  //     label: "Company 2",
  //     value: 2,
  //   },
  //   {
  //     label: "Company 3",
  //     value: 3,
  //   },
  // ];

  return (
    <Form name={name} onFinish={handleSubmit}>
      <div className="flex justify-between space-x-4">
        <div className="w-4/6">
          <Card
            size="small"
            headStyle={{ backgroundColor: "#f7f8fa", fontWeight: "bold" }}
            bodyStyle={{ padding: 20 }}
            style={{
              marginTop: 15,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
            title="Employment Information"
          >
            <div>
              <label>Contract Documents</label>
            </div>
            <SingleUpload />
            <Row gutter={24}>
              <Col span={8}>
                <Field
                  label="Company Name"
                  name="CompanyName"
                  id="CompanyName"
                  isRequired
                  placeholder="Enter company name"
                />
                {/* <SelectField
                  label="Company"
                  name="company"
                  id="company"
                  options={companyOptions}
                  isRequired
                /> */}
              </Col>
              <Col span={8} style={{ marginBottom: 0 }}>
                <SelectField
                  label="Department"
                  name="DepartmentId"
                  id="DepartmentId"
                  options={departmentOptions}
                  isRequired
                />
              </Col>
              <Col span={8} style={{ marginBottom: 0 }}>
                <SelectField
                  label="Position"
                  name="PositionId"
                  id="PositionId"
                  options={positionOptions}
                  isRequired
                />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <SelectField
                  defaultValue={1}
                  name="LocationId"
                  label="Location"
                  className="w-full"
                  onChange={() => {}}
                  options={locationOptions}
                  isRequired
                />
              </Col>
              <Col span={8}>
                <DatePickerField
                  defaultValue={values.joinDate}
                  name="JoinedDate"
                  id="JoinedDate"
                  label="Join Date"
                  className="w-full"
                  isRequired
                />
              </Col>
              <Col span={8}>
                <Field name="Salary" id="Salary" label="Salary" />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={6}>
                <DatePickerField
                  name="FromDate"
                  id="FromDate"
                  label="From Date"
                  isRequired
                />
              </Col>
              <Col span={6}>
                <DatePickerField
                  name="ToDate"
                  id="ToDate"
                  label="To Date"
                  isRequired
                />
              </Col>
              <Col span={6}>
                <div style={{ marginBottom: 5 }}>
                  <label>Active Status</label>
                </div>
                <Switch checked />
              </Col>
            </Row>
          </Card>
          <Card
            size="small"
            headStyle={{ backgroundColor: "#f7f8fa", fontWeight: "bold" }}
            bodyStyle={{ padding: 20 }}
            style={{
              marginTop: 15,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
            title="Dimensions"
          >
            <SalaryDimension values={values} name="dimensions" />
            <Button
              type="primary"
              ghost
              onClick={() => {
                const result = {
                  ...values.dimensions,
                  [_.size(values.dimensions)]: {
                    name: "",
                    value: 0,
                  },
                };
                setFieldValue(
                  "dimensions",
                  _.map(result, (r) => r)
                );
              }}
            >
              + Add Dimension
            </Button>
          </Card>
          <Card
            size="small"
            headStyle={{ backgroundColor: "#f7f8fa", fontWeight: "bold" }}
            bodyStyle={{ padding: 20 }}
            style={{
              marginTop: 15,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
            title="Personal Information"
          >
            <Row gutter={24}>
              <Col span={8}>
                <label>Profile Picture</label>
                <SingleUpload />
              </Col>
              <Col span={8}>
                <label>Attached Files</label>
                <SingleUpload />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Field name="Name" id="Name" label="Name" isRequired />
              </Col>
              <Col span={8}>
                <Field
                  label="Phone Number"
                  id="PhoneNo"
                  name="PhoneNo"
                  isRequired
                />
              </Col>
              <Col span={8}>
                <Field name="email" id="email" label="Email" isRequired />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Field name="FatherName" id="FatherName" label="Father Name" />
              </Col>
              <Col span={7}>
                <DatePickerField
                  label="Date Of Birth"
                  name="DateofBirth"
                  id="DateofBirth"
                  className="w-full"
                  showToday={false}
                />
              </Col>
              <Col span={9}>
                <RadioField
                  name="Gender"
                  id="Gender"
                  label="Gender"
                  options={genderOptions}
                />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={16}>
                <Label label="NRC Number" isRequired />
                <Row gutter={24}>
                  <Col span={4}>
                    <SelectField
                      name="nrcNo1"
                      id="nrcNo1"
                      defaultValue={1}
                      options={numberOptions}
                    />
                  </Col>
                  /
                  <Col span={7}>
                    <SelectField
                      name="nrcTownship"
                      id="nrcTownship"
                      defaultValue="AhGaYa"
                      options={nrcOptions}
                    />
                  </Col>
                  {`(`}
                  <Col span={4}>
                    <SelectField
                      defaultValue="N"
                      name="nrcType"
                      className="w-full"
                      options={nationalOptions}
                    />
                  </Col>
                  {`)`}
                  <Col span={8}>
                    <Field name="nrcNo2" id="nrcNo2" placeholder="xxxxxx" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Field name="Race" id="Race" label="Race" />
              </Col>
              <Col span={8}>
                <Field name="Religion" id="Religion" label="Religion" />
              </Col>
              <Col span={8}>
                <RadioField
                  name="MaritalStatus"
                  id="MaritalStatus"
                  label="Marital Status"
                  options={[
                    { key: 0, label: "Single", value: "Single" },
                    { key: 1, label: "Married", value: "Married" },
                  ]}
                />
              </Col>
            </Row>
          </Card>
          <Card
            size="small"
            headStyle={{ backgroundColor: "#f7f8fa", fontWeight: "bold" }}
            bodyStyle={{ padding: 20 }}
            style={{
              marginTop: 15,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
            title="Address"
          >
            <label style={{ fontWeight: "bold" }}>Permanent Address</label>
            <Row gutter={24}>
              <Col span={12}>
                <SelectField
                  defaultValue={1}
                  label="City"
                  name="PCityId"
                  id="PCityId"
                  className="w-full"
                  options={cityOptions}
                />
              </Col>
              <Col span={12}>
                <SelectField
                  label="Township"
                  name="PTspId"
                  id="PTspId"
                  defaultValue={1}
                  className="w-full"
                  options={townOptions}
                />
              </Col>
              <Col span={10} style={{ marginTop: 10 }}>
                <TextAreaField
                  label="No & Street"
                  name="PNoAndStreet"
                  id="PNoAndStreet"
                  rows={3}
                  placeholder="No (x), xxxxx Street"
                />
              </Col>
            </Row>
            <div style={{ marginTop: 22 }}>
              <label style={{ fontWeight: "bold" }}>Current Address</label>
              <Row gutter={24}>
                <Col span={12}>
                  <SelectField
                    defaultValue={1}
                    label="City"
                    name="CCityId"
                    id="CCityId"
                    className="w-full"
                    options={cityOptions}
                  />
                </Col>
                <Col span={12}>
                  <SelectField
                    label="Township"
                    name="CTspId"
                    id="CTspId"
                    defaultValue={1}
                    className="w-full"
                    options={townOptions}
                  />
                </Col>
                <Col span={10} style={{ marginTop: 10 }}>
                  <TextAreaField
                    placeholder="No (x), xxxxx Street"
                    name="CNoAndStreet"
                    id="CNoAndStreet"
                    label="No & Street"
                    rows={3}
                  />
                </Col>
              </Row>
            </div>
          </Card>
          <Card
            size="small"
            headStyle={{ backgroundColor: "#f7f8fa", fontWeight: "bold" }}
            bodyStyle={{ padding: 20 }}
            style={{
              marginTop: 15,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
            title="Experiences"
          >
            <ExperienceArray values={values} name="experiences" />
            <Button
              type="primary"
              ghost
              onClick={() => {
                const result = {
                  ...values.experiences,
                  [_.size(values.experiences)]: {
                    Rank: "",
                    CompanyInformaiton: "",
                    CmpyNoAndStreet: "",
                    CmpyTspId: 1,
                    CmpyCityId: 1,
                    FromDate: "",
                    ToDate: "",
                    ReasonofResign: "",
                    isVerified: "",
                  },
                };
                setFieldValue(
                  "experiences",
                  _.map(result, (r) => r)
                );
              }}
            >
              + Add Experience
            </Button>
          </Card>
        </div>
        <div style={{ width: "33%" }}>
          <Card
            size="small"
            headStyle={{ backgroundColor: "#f7f8fa", fontWeight: "bold" }}
            style={{
              marginTop: 15,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
            title="Education"
          >
            <EducationArray values={values} name="educations" />
            <Button
              type="primary"
              ghost
              onClick={() => {
                const result = {
                  ...values.educations,
                  [_.size(values.educations)]: {
                    // name: "",
                    // uniName: "",
                    // fromDate: dayjs(),
                    // toDate: dayjs(),
                    // city: null,
                    EdName: "",
                    NameofUni: "",
                    FromDate: "",
                    ToDate: "",
                    CityId: 0,
                  },
                };
                setFieldValue(
                  "educations",
                  _.map(result, (r) => r)
                );
              }}
            >
              + Add Education
            </Button>
          </Card>
        </div>
        <SubmitBtn
          size="large"
          type="primary"
          icon={<SaveOutlined />}
          className="fixed bottom-6 right-10"
          title="Save"
          disabled={!isValid}
        />
      </div>
    </Form>
  );
}
