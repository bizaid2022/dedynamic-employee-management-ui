import React from "react";
import { Badge, Button, Layout, Popconfirm } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export function AppBar({ collapsed, setCollapsed }) {
  const { Header } = Layout;
  const navigate = useNavigate();

  return (
    <Header
      className="flex justify-start items-center max-h-12"
      style={{
        padding: "0px 10px",
        backgroundColor: "#fff",
        fontSize: "20px",
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}
      <div className="flex justify-end items-center w-full space-x-2">
        <Popconfirm
          title="Are you sure to leave this page?"
          onConfirm={() => navigate("/auth/home")}
        >
          <Button
            type="text"
            className="flex justify-center items-center bg-secondary"
            icon={<HomeOutlined className="text-white" />}
          />
        </Popconfirm>
        <Button type="text">
          <Badge color="green" text={<span>admin@dedynamic.com</span>} />
        </Button>
      </div>
    </Header>
  );
}
