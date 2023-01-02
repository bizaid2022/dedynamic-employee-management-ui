import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../../services/employeeSlice";
import { EmployeeForm } from "./components/EmployeeForm";
import _ from "lodash";
import { message } from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export function EmployeeCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    EnrollNum: "",
    Name: "",
    Gender: "",
    DateofBirth: "",
    Age: 0,
    NRCNo: "",
    FatherName: "",
    Race: " ",
    Religion: " ",
    MaritalStatus: "",
    Qualification: "",
    PNoAndStreet: "",
    PTspId: 1,
    PCityId: 1,
    CNoAndStreet: "",
    CTspId: 1,
    CCityId: 1,
    JoinedDate: dayjs(),
    EmploymentContractId: 1,
    CompanyName: "",
    DepartmentId: 1,
    PositionId: 1,
    LocationId: 1,
    Salary: 0,
    FromDate: dayjs(),
    ToDate: dayjs(),
    PhoneNo: "",
    nrcNo1: 1,
    nrcNo2: "",
    nrcTownship: "",
    nrcType: "N",
    experiences: [
      {
        Rank: "",
        CompanyInformaiton: "",
        CmpyNoAndStreet: "",
        CmpyTspId: 1,
        CmpyCityId: 1,
        FromDate: dayjs(),
        ToDate: dayjs(),
        ReasonofResign: "",
      },
    ],
    educations: [
      {
        EdName: "",
        NameofUni: "",
        FromDate: dayjs(),
        ToDate: dayjs(),
        CityId: 1,
      },
    ],
  };
  const onFormSubmit = (data, { resetForm, setSubmitting }) => {
    const parsedData = {
      ...data,
      NRCNo: `${data.nrcNo1}/${data.nrcTownship} (${data.nrcType}) ${data.nrcNo2}`,
      ExperienceArray: data.experiences,
      EducationArray: data.educations,
    };
    dispatch(createEmployee(parsedData)).then(async (res) => {
      if (_.endsWith(res.type, "fulfilled")) {
        message.success("Employee is created");
        resetForm();
        navigate(`/auth/employees/${res?.payload?.id}`, { replace: true });
      } else {
        setSubmitting(false);
      }
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={employeeShcema}
      onSubmit={onFormSubmit}
    >
      {({
        values,
        setFieldValue,
        handleSubmit,
        isSubmitting,
        isValid,
        /* and other goodies */
      }) => (
        <EmployeeForm
          isSubmitting={isSubmitting}
          handleSubmit={handleSubmit}
          values={values}
          setFieldValue={setFieldValue}
          isValid={isValid}
        />
      )}
    </Formik>
  );
}
