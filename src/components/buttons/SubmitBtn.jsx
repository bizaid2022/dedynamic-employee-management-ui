import { Button } from "antd";
import React from "react";

export function SubmitBtn({
  type,
  title,
  size = "large",
  icon,
  disabled,
  className,
}) {
  return (
    <Button
      size={size}
      type={type}
      htmlType="submit"
      icon={icon}
      className={className}
      disabled={disabled}
    >
      {title}
    </Button>
  );
}
