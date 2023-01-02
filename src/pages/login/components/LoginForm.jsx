import { Form, message, Spin, Typography } from "antd";
import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "../../../components/fields/Field";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { login } from "../../../services/authSlice";
import _ from "lodash";
import { SubmitBtn } from "../../../components/buttons/SubmitBtn";

export function LoginForm({ redirect }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (data) => {
    setLoading(true);
    dispatch(login(data)).then((response) => {
      if (_.endsWith(response.type, "fulfilled")) {
        // if (redirect) navigate(redirect); // redirect to prev page before login
        navigate("/auth/home");
        message.success("Login Success");
      }
      setLoading(false);
    });
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;

  return (
    <Formik initialValues={{ UserName: "", Password: "" }} onSubmit={onLogin}>
      {({
        values,
        handleSubmit,
        /* and other goodies */
      }) => (
        <Form onFinish={handleSubmit}>
          <div className="mb-3">
            <Field label="Username" name="UserName" id="UserName" />
          </div>
          <div className="mb-3">
            <Field
              label="Password"
              type="password"
              name="Password"
              id="Password"
            />
          </div>
          {/* <Button
            className="bg-blue-500 font-bold w-full"
            onClick={() => onLogin(values)}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <Spin
                  indicator={antIcon}
                  style={{ color: "#fff", marginRight: 10 }}
                />
                <Typography className="text-white">Logging In</Typography>
              </div>
            ) : (
              <Typography className="text-white"> Log in</Typography>
            )}
          </Button> */}
          <SubmitBtn
            size="medium"
            type="primary"
            className="bg-blue-500 font-bold w-full"
            title={
              loading ? (
                <div className="flex justify-center items-center">
                  <Spin
                    indicator={antIcon}
                    style={{ color: "#fff", marginRight: 10 }}
                  />
                  <Typography className="text-white">Logging In</Typography>
                </div>
              ) : (
                <Typography className="text-white"> Log in</Typography>
              )
            }
          />
        </Form>
      )}
    </Formik>
  );
}
