import React from "react";
import { Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

function Label({ id, tooltip, label, isRequired }) {
  return (
    <label htmlFor={id} className={`text bold ${isRequired && "required"}`}>
      {tooltip ? (
        <span>
          {label}
          &nbsp;
          <Tooltip title={tooltip}>
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
      ) : (
        label
      )}
    </label>
  );
}
export default Label;
