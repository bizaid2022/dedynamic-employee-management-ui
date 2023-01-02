import React from "react";
import { Avatar, Button, Card, Space } from "antd";
import { UserOutlined, GiftOutlined } from "@ant-design/icons";

const { Meta } = Card;

export function EmployeeInfo() {
  return (
    <Space direction="vertical" className="w-full">
      <Card size="small">
        <div className="w-full flex justify-center bg-slate-100">
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 50, xl: 100, xxl: 100 }}
            icon={<UserOutlined />}
            className="relative -bottom-5 bg-gray-200"
          />
        </div>
        <div className="mt-6 text-center">
          <Meta title="Europe Street beat" description="EMP000003" />
          <p className="m-0 mt-3 p-0">+959489988654</p>
          <p className="mt-0 text-gray-500">1/ XXX (N) 078386352</p>
          <div className="flex justify-center space-x-2">
            <Button shape="round" type="primary">
              + Task
            </Button>
            <Button
              shape="round"
              className="bg-green-500 text-white"
              type="ghost"
            >
              Message
            </Button>
          </div>
        </div>
      </Card>
      <Card title="Employee Info" size="small">
        <div>
          <Space>
            <UserOutlined className="text-blue-500" />
            Sales Department
          </Space>
        </div>
        <Space>
          <UserOutlined className="text-blue-500" />
          <p className="m-0 p-0 text-gray-400">Sales Executive</p>
        </Space>
        <div>No (85), Yadanar Street, Sanchaung, Yangon</div>
      </Card>
      <Card size="small">
        <div className="my-3">
          <GiftOutlined className="text-green-500" />
          <span className="ml-2">01-06-1988 (34 years)</span>
        </div>
        {/* <div className="my-3">
          <UserOutlined className="text-blue-500" />
          <span className="ml-2">01-06-1988 (34 years)</span>
        </div> */}
        <div>No (85), Yadanar Street, Sanchaung, Yangon</div>
      </Card>
    </Space>
  );
}
