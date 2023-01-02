import React from "react";
import { Field as FormikField } from "formik";
import { DatePicker, Form } from "antd";
import dayjs from "dayjs";
import Label from "../label/Label";
// import { dateFormat } from "../../utils/Utils";

const renderField = ({
  name,
  id,
  label,
  placeholder,
  field,
  disabled,
  defaultValue,
  isRequired,
  form: { setFieldValue, touched, errors },
  extra,
  showToday,
  className,
}) => (
  <Form.Item
    validateStatus={touched[field.name] && errors[field.name] && "error"}
    help={touched[field.name] && errors[field.name]}
    extra={extra}
  >
    <Label htmlFor={id} label={label} isRequired={isRequired} />
    <DatePicker
      {...field}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      format="YYYY-MM-DD"
      defaultValue={dayjs() || field.value}
      onChange={(date) => {
        setFieldValue(field.name, dayjs(date));
      }}
      className={className}
      allowClear={false}
      showToday={showToday}
    />
  </Form.Item>
);

function DatePickerField(props) {
  const {
    name,
    id,
    label,
    placeholder,
    isRequired,
    disabled,
    extra,
    defaultValue,
    showToday,
    className,
  } = props;

  return (
    <FormikField
      name={name}
      id={id}
      label={label}
      placeholder={placeholder}
      component={renderField}
      disabled={disabled}
      isRequired={isRequired}
      extra={extra}
      defaultValue={defaultValue}
      showToday={showToday}
      className={className}
    />
  );
}

export default DatePickerField;
