import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialiseSelector, slice } from "../utils/Utils";
import { API_URL } from "../variables/constants";

const initialState = {
  isPending: false,
  hasError: false,
  data: {},
};

export const getEmployees = createAsyncThunk(
  "employees/getAll",
  async (params) => {
    // const { data, headers } = await axios.get(`${API_URL}/api/read.php`, {
    const { data } = await axios.get(
      `http://172.16.0.14/DEDynamicEmployeeAPI/api/read.php`,
      {
        params: {
          filter: params?.filter,
          page: params?.page,
          size: params?.size,
          is_enable: params?.is_enable,
        },
      }
    );
    return data.body;
  }
);

export const getOneEmployee = createAsyncThunk(
  "employees/getOne",
  async (params) => {
    const response = await axios.get(`/api/v4/admin/employees/${params?.slug}`);
    return response.data;
  }
);

export const getEmployeesByDepartment = createAsyncThunk(
  "employees/getEmployeesByDepartment",
  async (params) => {
    const { data, headers } = await axios.get(
      `/api/v2/admin/departments/${params?.slug}/employees`,
      {
        params: {
          filter: params?.filter,
          page: params?.page,
          size: params?.size,
        },
      }
    );
    return { data, headers };
  }
);

export const createEmployee = createAsyncThunk(
  "employees/create",
  async (value) => {
    const response = await axios.post(`${API_URL}/api/create.php`, value);
    return response.data;
  }
);

export const updateEmployee = createAsyncThunk(
  "employees/update",
  async (value) => {
    const response = await axios.put(`${API_URL}/api/create.php`, value);

    return response.data;
  }
);

export const deleteEmployee = createAsyncThunk(
  "employees/delete",
  async ({ slug, permanent }) => {
    const response = await axios.delete(`/api/v2/admin/employees/${slug}`);

    return response.data;
  }
);

export const toggleEmployee = createAsyncThunk(
  "employees/toggle",
  async (data) => {
    const response = await axios.patch(
      `/api/v2/admin/employees/toggle-enable/${data.slug}`
    );
    return response.data;
  }
);

export const multiEmployeeStatusUpdate = createAsyncThunk(
  "employees/multiEmployeeStatusUpdate",
  async (value) => {
    const response = await axios.post("/api/v2/admin/employees/status", {
      slugs: value?.slugs,
      is_enable: value?.is_enable,
    });
    return response.data;
  }
);

export const multiEmployeeDelete = createAsyncThunk(
  "employees/multiEmployeeDelete",
  async (value) => {
    const response = await axios.post(
      "/api/v2/admin/employees/multiple-delete",
      {
        slugs: value?.slugs,
      }
    );
    return response.data;
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return {
      ...slice(builder, getEmployees, "EmpId"),
      ...slice(builder, getOneEmployee, "EmpId"),
      ...slice(builder, createEmployee, "EmpId"),
      ...slice(builder, updateEmployee, "EmpId"),
      // ...slice(getEmployeesByDepartment, "slug"),
      // ...sliceBy(toggleEmployee, (state, action) => ({
      //   ...state,
      //   isPending: false,
      //   hasError: false,
      //   data: {
      //     ...state.data,
      //     [action.meta.arg.slug]: {
      //       ...state.data[action.meta.arg.slug],
      //       is_enable: !state.data[action.meta.arg.slug].is_enable,
      //     },
      //   },
      // })),
    };
  },
  // extraReducers: {
  //   ...slice(getEmployees, "EmpId"),
  //   ...slice(getOneEmployee, "slug"),
  //   ...slice(createEmployee, "EmpId"),
  //   ...slice(getEmployeesByDepartment, "slug"),
  //   ...sliceBy(toggleEmployee, (state, action) => ({
  //     ...state,
  //     isPending: false,
  //     hasError: false,
  //     data: {
  //       ...state.data,
  //       [action.meta.arg.slug]: {
  //         ...state.data[action.meta.arg.slug],
  //         is_enable: !state.data[action.meta.arg.slug].is_enable,
  //       },
  //     },
  //   })),
  // },
});

const employeeReducer = employeeSlice.reducer;

export const employeeSelector = ({ employees }) =>
  initialiseSelector(employees);

export default employeeReducer;
