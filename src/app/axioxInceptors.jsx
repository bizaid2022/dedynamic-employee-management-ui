import _ from "lodash";
import React from "react";
import axios from "axios";
import { message, Modal } from "antd";
import { getToken } from "../utils/Auth";

const { REACT_APP_API_URL } = process.env;

const ErrorTable = ({ data }) =>
  _.map(data?.errors, ({ row, errors }) => (
    <React.Fragment key={row}>
      <h4>{`Row: ${row}, has invalid data.`}</h4>
      <ul>
        {_.map(errors, (error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </React.Fragment>
  ));

const sendNotification = ({ status, data, statusText }) => {
  if (status >= 400 && status < 500) {
    if (data?.message) {
      if (_.isEmpty(data?.errors)) {
        message.error(data.message);
      } else {
        // message.error(<Message message={data.message} errors={data.errors} />);
        Modal.error({
          title: data.message,
          content: <ErrorTable data={data} />,
          bodyStyle: { maxHeight: 600, overflow: "auto" },
        });
      }
    } else if (data?.error) {
      message.error(data.error);
    } else {
      Modal.error({
        title: "Unknown error",
        content: <ErrorTable data={data} />,
        bodyStyle: { maxHeight: 600, overflow: "auto" },
      });
    }
  } else {
    Modal.error({
      title: statusText,
      content: <ErrorTable data={data} />,
    });
  }
};

export const setupResponseInterceptor = () => {
  axios.interceptors.response.use(
    (response) =>
      // sendNotification(response);
      response,
    (error) => {
      sendNotification(error.response);
      if (error.response.status === 401 && window.location.pathname !== "/") {
        window.location = "/";
      }
      // throw error;
      return Promise.reject(error.response.data, error.response.data.errors);
    }
  );
};

export const setupRequestInterceptor = () => {
  axios.interceptors?.request?.use(
    (config) => {
      const request = { ...config };
      if (
        process.env.NODE_ENV === "production" &&
        !_.startsWith(request.url, "http")
      ) {
        request.url = `${REACT_APP_API_URL}${request.url}`;
      }
      console.log("request", request);
      const token = getToken();
      if (token) {
        request.headers = {
          ...request.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      return request;
    },
    (error) =>
      // Do something with request error
      Promise.reject(error)
  );
};
