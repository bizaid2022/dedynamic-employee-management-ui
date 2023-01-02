import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LogoutOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Image, Layout, Popconfirm, Spin } from "antd";
import routes from "../../app/routes";
import _, { isEmpty } from "lodash";
import bizLogo from "../../assets/images/bizAid-logo.png";
import { AppBar } from "./AppBar";
import { SidebarMenu } from "./SidebarMenu";
import { NotFoundPage } from "../../pages/notFound";
import { useDispatch } from "react-redux";
import { logout } from "../../services/authSlice";
import { getToken } from "../../utils/Auth";

const { Sider, Content } = Layout;

const authRoutes = _.flatten(
  _.map(routes, (route) => {
    if (route.nested) {
      return route.nested;
    }
    return route;
  })
);

export function AppLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = getToken();

  const onLogout = () => {
    setLoading(true);
    dispatch(logout());
    // setTimeout(() => {
    navigate("/");
    // }, 800);
  };

  useEffect(() => {
    if (isEmpty(token)) {
      navigate("/");
    }
  }, [token, navigate]);

  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: 20, marginRight: 10, color: "#fe0000" }}
      spin
    />
  );

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh", backgroundColor: "#046fff" }}
      >
        <div className="flex justify-center items-center">
          {collapsed ? (
            <div className="flex justify-center items-center py-3 px-2 shadow-lg w-full bg-slate-50">
              <Image src={bizLogo} preview={false} className="p-1" />
            </div>
          ) : (
            <div
              className="flex justify-center items-center p-2 shadow-lg w-full bg-slate-50"
              // style={{ backgroundColor: "#fff" }}
              //  className="font-bold p-2 m-2 text-xl italic text-white bg-slate-50 w-full text-center rounded-lg"
            >
              {/* <span
                style={{
                  color: "#FDBD01",
                  marginRight: 4,
                }}
              >
                D
              </span>
              Dynamic */}
              <Image src={bizLogo} preview={false} className="py-2 px-5" />
            </div>
          )}
        </div>
        <SidebarMenu />

        {collapsed ? (
          loading ? (
            <div className="fixed bottom-3 left-12 font-bold text-xl">
              <Spin indicator={antIcon} />
            </div>
          ) : (
            <Popconfirm title="Are you sure to logout?" onConfirm={onLogout}>
              <LogoutOutlined className="text-white text-xl font-bold fixed bottom-5 left-7" />
            </Popconfirm>
          )
        ) : (
          <Popconfirm title="Are you sure to logout?" onConfirm={onLogout}>
            <Button
              className="bg-white flex justify-center items-center fixed bottom-3 left-12 font-semibold"
              icon={
                loading ? (
                  <Spin indicator={antIcon} />
                ) : (
                  <LogoutOutlined className="text-brand text-large font-bold" />
                )
              }
            >
              {loading ? <>Logging out</> : <>Logout</>}
            </Button>
          </Popconfirm>
        )}
      </Sider>
      <Layout className="site-layout">
        <AppBar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          className="px-3 py-2 overflow-y-auto"
          style={{
            minHeight: 280,
            maxHeight: window.innerHeight - 55,
          }}
        >
          <Routes>
            {_.map(authRoutes, ({ key, path, component }) => (
              <Route key={key} path={path} element={component} />
            ))}
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
