import React from "react";
import { Field as FormikField } from "formik";
import { Input, Form } from "antd";
import Label from "../label/Label";

const { TextArea } = Input;

const renderField = ({
  name,
  id,
  label,
  placeholder,
  rows,
  field,
  isRequired,
  className,
  form: { touched, errors },
  extra,
  ...props
}) => (
  <Form.Item
    validateStatus={touched[field.name] && errors[field.name] && "error"}
    help={touched[field.name] && errors[field.name]}
    className={className}
    extra={extra}
  >
    <Label htmlFor={id} label={label} isRequired={isRequired} />
    <TextArea
      {...field}
      rows={rows}
      name={name}
      id={id}
      placeholder={placeholder}
      {...props}
    />
  </Form.Item>
);

function TextAreaField(props) {
  const {
    name,
    label,
    placeholder,
    rows,
    isRequired,
    id,
    disabled,
    tooltip,
    className,
    extra,
    ...restProps
  } = props;

  return (
    <FormikField
      name={name}
      id={id}
      label={label}
      placeholder={placeholder}
      component={renderField}
      disabled={disabled}
      rows={rows}
      tooltip={tooltip}
      isRequired={isRequired}
      className={className}
      extra={extra}
      {...restProps}
    />
  );
}

export default TextAreaField;
