import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { authSelector } from "../services/authSlice";

function AuthLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isInitialized, isAuthenticated, isPending } =
    useSelector(authSelector);

  //   useEffect(() => {
  //     const lang = localStorage.getItem(LOCALIZATION_LABEL);
  //     if (lang) i18n.changeLanguage(lang);
  //   }, []);

  useEffect(() => {
    if (isInitialized) {
      if (isAuthenticated) {
        if (!pathname.includes("/auth/"))
          navigate("/auth/dashboard", { replace: true });
      } else {
        const prevPath = pathname.includes("/auth/") ? pathname : undefined;
        navigate("/", { replace: true, state: { path: prevPath } });
      }
    }
  }, [isInitialized, isAuthenticated, navigate, pathname]);

  if (!isPending) return <Outlet />;

  return (
    <Spin size="middle">
      <div style={{ width: "100%", height: "100vh" }} />
    </Spin>
  );
}

export default AuthLayout;
