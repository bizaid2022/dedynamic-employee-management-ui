import React from "react";
import { Field as FormikField } from "formik";
import { Radio, Form } from "antd";
import Label from "../label/Label";

const renderField = ({
  name,
  id,
  label,
  field,
  form: { setFieldValue, touched, errors },
  options,
  disabled,
  isRequired,
  credit,
  onChange,
}) => (
  <Form.Item
    validateStatus={touched[field.name] && errors[field.name] && "error"}
    help={touched[field.name] && errors[field.name]}
    // style={{ marginBottom: type === 'credits' && '0px' }}
  >
    <div>
      <Label htmlFor={id} label={label} isRequired={isRequired} />
    </div>
    <Radio.Group {...field} name={name} id={id} className="d-block">
      {options.map((option) => (
        <Radio
          name={name}
          id={id}
          key={option.value}
          value={option.value}
          onChange={(event) => {
            setFieldValue(field.name, event.target.value);
            // setFieldValue("rules", []);
            // if (typeof onChange === "function") {
            //   onChange(event.target.value);
            // }
          }}
          disabled={disabled}
        >
          {option.label}
          {option.label === "Credit" && credit}
        </Radio>
      ))}
    </Radio.Group>
  </Form.Item>
);

function RadioField(props) {
  const {
    name,
    label,
    isRequired,
    message,
    id,
    disabled,
    options,
    credit,
    onChange,
  } = props;

  return (
    <FormikField
      name={name}
      id={id}
      message={message}
      label={label}
      component={renderField}
      disabled={disabled}
      options={options}
      isRequired={isRequired}
      credit={credit}
      onChange={onChange}
    />
  );
}

export default RadioField;
