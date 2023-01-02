import { Button, Col, Image, Row } from "antd";
import React, { useEffect } from "react";
import {
  TeamOutlined,
  WalletOutlined,
  FileDoneOutlined,
  StarOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import logo from "../../assets/images/bizAid-logo.png";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/Auth";
import { isEmpty } from "lodash";
import { APP_VERSION } from "../../variables/constants";

export function MainPage() {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (isEmpty(token)) {
      navigate("/");
    }
  }, [token, navigate]);
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(#A7BFE8, #046fff, #6190E8)",
      }}
      className="flex flex-col justify-start items-center min-h-screen"
    >
      <div
        className="flex justify-center items-center mt-20 mb-5 p-3 w-20 h-8 shadow-lg"
        style={{
          border: "1px solid #ddd",
          backgroundColor: "#046fff",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 4,
        }}
      >
        <Image
          src={logo}
          preview={false}
          className="bg-white py-2 px-3 shadow-md"
        />
      </div>
      <p className="text-center text-white mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        perspiciatis nostrum tempora.
      </p>
      <Row gutter={24}>
        <Col className="gutter-row mb-10" span={6}>
          <Button
            onClick={() => navigate("/auth/employees")}
            className="bg-white h-24 w-36 font-semibold"
            style={{
              boxShadow: "8px 8px #2E2EFE",
            }}
          >
            <div>
              <TeamOutlined className="text-2xl text-brand mb-2" />
            </div>
            Employees
          </Button>
        </Col>
        <Col className="gutter-row" span={6}>
          <Button
            className="bg-white h-24 w-36 font-semibold"
            style={{
              boxShadow: "8px 8px #2E2EFE",
            }}
          >
            <div>
              <WalletOutlined style={{ fontSize: 30, color: "#046fff" }} />
            </div>
            Pay Roll
          </Button>
        </Col>
        <Col className="gutter-row" span={6}>
          <Button
            className="bg-white h-24 w-36 font-semibold"
            style={{
              boxShadow: "8px 8px #2E2EFE",
            }}
          >
            <div>
              <FileDoneOutlined style={{ fontSize: 30, color: "#046fff" }} />
            </div>
            Accounting
          </Button>
        </Col>
        <Col className="gutter-row" span={6}>
          <Button
            className="bg-white h-24 w-36 font-semibold"
            style={{
              boxShadow: "8px 8px #2E2EFE",
            }}
          >
            <div>
              <StarOutlined style={{ fontSize: 30, color: "#046fff" }} />
            </div>
            Business Planning
          </Button>
        </Col>
        <Col className="gutter-row" span={6}>
          <Button
            className="bg-white h-24 w-36 font-semibold"
            style={{
              boxShadow: "8px 8px #2E2EFE",
            }}
          >
            <div>
              <ReconciliationOutlined
                style={{ fontSize: 30, color: "#046fff" }}
              />
            </div>
            Analysis
          </Button>
        </Col>
      </Row>
      <div className="flex justify-center items-center font-semibold fixed bottom-2">
        <div className="pt-1 mr-1 font-bold">Powered By</div>
        <Image src={logo} preview={false} />
        <span className="ml-2 text-slate-100">| Version: {APP_VERSION}</span>
      </div>
    </div>
  );
}
