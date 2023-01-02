import {
  UsergroupAddOutlined,
  ApartmentOutlined,
  BuildOutlined,
  TagsOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Departments } from "../pages/departments";
// import { DepartmentCreate } from "../pages/departments/DepartmentCreate";
import { Employees } from "../pages/employees";
import { EmployeeCreate } from "../pages/employees/EmployeeCreate";
import { EmployeeDetail } from "../pages/employees/EmployeeDetail";
import { Locations } from "../pages/locations";
import { Positions } from "../pages/positions";
import { Task } from "../pages/tasks";

const routes = [
  {
    key: 1,
    path: "employees",
    label: "Employees",
    icon: <UsergroupAddOutlined style={{ fontSize: "18px" }} />,
    component: <Employees />,
  },
  {
    key: 1.1,
    path: "employees/create",
    component: <EmployeeCreate />,
  },
  {
    key: 1.2,
    path: "employees/:Id",
    component: <EmployeeDetail />,
  },
  {
    key: 2,
    path: "tasks",
    label: "Tasks",
    icon: <FileDoneOutlined style={{ fontSize: "18px" }} />,
    component: <Task />,
  },

  {
    key: 4,
    path: "departments",
    label: "Departments",
    icon: <ApartmentOutlined style={{ fontSize: "18px" }} />,
    component: <Departments />,
  },
  {
    key: 5,
    path: "locations",
    label: "Locations",
    icon: <BuildOutlined style={{ fontSize: "18px" }} />,
    component: <Locations />,
  },
  {
    key: 5,
    path: "positions",
    label: "Positions",
    icon: <TagsOutlined style={{ fontSize: "18px" }} />,
    component: <Positions />,
  },
];

export default routes;
