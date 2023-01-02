import { Card, Image } from "antd";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/bizAid-logo.png";
import { getToken } from "../../utils/Auth";
import { APP_VERSION } from "../../variables/constants";
import { LoginForm } from "./components/LoginForm";

export function Login() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!isEmpty(token)) {
      navigate("/auth/home");
    }
  }, [token, navigate]);

  return (
    <div className="flex min-h-screen">
      <div
        style={{
          backgroundImage: "linear-gradient(#667db6, #0082c8,#0082c8,#667db6)",
          clipPath: "polygon(0 0, 90% 0, 81% 100%, 0% 100%)",
        }}
        className="flex justify-center items-center p-5"
      >
        <Image
          preview={false}
          className="rounded-lg"
          src="https://st4.depositphotos.com/14490296/26573/v/450/depositphotos_265735340-stock-illustration-teamwork-of-people-at-finding.jpg"
        />
      </div>
      <div className="flex flex-col justify-center items-start min-h-screen">
        <h1 className="text-2xl ml-52 text-brand font-semibold mb-2">
          Login Here
        </h1>
        <div className="flex">
          <div>
            <Image
              preview={false}
              width={200}
              height={200}
              src="https://st3.depositphotos.com/1178636/34734/v/450/depositphotos_347346626-stock-illustration-teamwork-business-mans-womans-partnership.jpg"
            />
          </div>
          <Card size="small" className="w-96 ml-4">
            <LoginForm redirect={state?.path} />
          </Card>
        </div>
      </div>
      <div className="fixed bottom-3 right-5 flex justify-end items-center font-semibold">
        <div className="mt-1 mr-1">Powered By</div>
        <Image src={logo} preview={false} />
        <span className="ml-2 text-gray-600">| Version: {APP_VERSION}</span>
      </div>
    </div>
  );
}
