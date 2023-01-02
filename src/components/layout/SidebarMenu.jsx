import React from "react";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import _ from "lodash";
import routes from "../../app/routes";

export function SidebarMenu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const items = _.map(
    _.filter(routes, ({ label, icon }) => label && icon),
    ({ key, path, label, icon, nested, hasLineBreak, roles }) => {
      if (nested) {
        return {
          label,
          icon,
          children: _.map(
            _.filter(nested, (subRoute) => subRoute.label && subRoute.icon),
            (subRoute) => ({
              label: subRoute.label,
              key: subRoute.path,
              onClick: () => navigate(subRoute.path),
            })
          ),
        };
      }
      return {
        label,
        key: path,
        icon,
        onClick: () => navigate(`/auth/${path}`),
      };
    }
  );

  return (
    <Menu
      mode="inline"
      style={{ backgroundColor: "#046fff", color: "#fff" }}
      defaultSelectedKeys={[pathname]}
      items={items}
    />
  );
}
