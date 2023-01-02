import React, { useState } from "react";
import { Field as FormikField } from "formik";
import { Select, Form, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import _ from "lodash";
import Label from "../label/Label";

const { Option } = Select;

const renderField = ({
  name,
  id,
  label,
  placeholder,
  isRequired,
  field,
  form: { setFieldValue, touched, errors },
  options,
  disabled,
  mode,
  allowClear,
  onSelect,
  onSearch,
  tooltip,
  loading,
  onClick,
  type,
  address,
  className,
  noLabel,
  width,
  defaultValue,
  onClear,
}) => (
  <Form.Item
    validateStatus={touched[field.name] && errors[field.name] && "error"}
    help={touched[field.name] && errors[field.name]}
    className={className}
  >
    {/* {!noLabel && ( */}
    <Label
      tooltip={tooltip}
      htmlFor={id}
      label={label}
      isRequired={isRequired}
    />
    {/* )} */}
    <Input.Group compact>
      <Select
        {...field}
        mode={mode || "single"}
        placeholder={placeholder}
        name={name}
        id={id}
        showSearch
        autoClearSearchValue
        loading={loading}
        style={
          onClick
            ? { width: width || "calc(100% - 32px)" }
            : { width: width || "100%" }
        }
        allowClear={allowClear}
        defaultValue={field.value}
        // value={defaultValue || field.value}
        onSelect={onSelect}
        onChange={(value) => {
          setFieldValue(field.name, value);
        }}
        onSearch={(value) => {
          if (typeof onSearch === "function") {
            onSearch(value);
          }
        }}
        onClear={onClear}
        filterOption={false}
        disabled={disabled}
      >
        {_.map(options, (option) => (
          <Option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </Option>
        ))}
      </Select>
      {onClick && (
        <Button
          className="text-bold mt-1"
          icon={<PlusOutlined />}
          onClick={onClick}
          disabled={disabled}
        />
      )}
    </Input.Group>
  </Form.Item>
);

function SelectField(props) {
  const {
    name,
    label,
    isRequired,
    id,
    disabled,
    placeholder,
    mode,
    options,
    allowClear,
    onSelect,
    onSearch,
    tooltip,
    loading,
    onClick,
    type,
    address,
    className,
    noLabel,
    width,
    defaultValue,
    onClear,
  } = props;

  const [search, setSearch] = useState();

  return (
    <FormikField
      search={search}
      setSearch={setSearch}
      name={name}
      id={id}
      label={label}
      component={renderField}
      disabled={disabled}
      tooltip={tooltip}
      mode={mode}
      placeholder={placeholder}
      options={options}
      allowClear={allowClear}
      onSelect={onSelect}
      onSearch={onSearch}
      isRequired={isRequired}
      loading={loading}
      onClick={onClick}
      onClear={onClear}
      type={type}
      address={address}
      className={className}
      noLabel={noLabel}
      width={width}
      defaultValue={defaultValue}
    />
  );
}

export default SelectField;
