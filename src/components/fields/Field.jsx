import React from "react";
import { Field as FormikField } from "formik";
import { Input, Form } from "antd";
import Label from "../label/Label";
import { flatten } from "../../utils/Utils";

const renderField = ({
  id,
  label,
  placeholder,
  type,
  field,
  disabled,
  form: { setFieldValue, ...form },
  prefixIcon,
  extra,
  tooltip,
  isRequired,
  style,
  textAlign,
  className,
  bordered,
  defaultValue,
}) => {
  const touched = flatten(form.touched);
  const errors = flatten(form.errors);

  const onChange = (e) => {
    setFieldValue(field.name, e.target.value);
  };
  return (
    <Form.Item
      className={className}
      style={style}
      validateStatus={touched[field.name] && errors[field.name] && "error"}
      help={touched[field.name] && errors[field.name]}
      extra={extra}
    >
      {label && (
        <Label
          tooltip={tooltip}
          htmlFor={id}
          label={label}
          isRequired={isRequired}
        />
      )}

      <Input
        {...field}
        id={id}
        type={type}
        prefix={prefixIcon}
        placeholder={placeholder}
        value={field.value !== "" ? field.value : defaultValue || ""}
        disabled={disabled}
        autoComplete="off"
        bordered={bordered}
        style={style || { textAlign }}
        onChange={(event) => onChange(event)}
      />
    </Form.Item>
  );
};

function Field(props) {
  const {
    name,
    label,
    placeholder,
    type,
    prefixIcon,
    isRequired,
    id,
    disabled,
    extra,
    tooltip,
    textAlign,
    style,
    bordered,
    className,
    defaultValue,
  } = props;

  return (
    <FormikField
      name={name}
      id={id}
      type={type}
      label={label}
      placeholder={placeholder}
      component={renderField}
      disabled={disabled}
      prefixIcon={prefixIcon}
      extra={extra}
      tooltip={tooltip}
      isRequired={isRequired}
      textAlign={textAlign}
      style={style}
      className={className}
      bordered={bordered}
      defaultValue={defaultValue}
    />
  );
}

export default Field;
