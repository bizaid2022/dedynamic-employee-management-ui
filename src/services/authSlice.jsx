import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../variables/constants";
import { setToken, delToken } from "../utils/Auth";

const initialState = {
  isPending: false,
  isAuthenticated: false,
  hasError: false,
  isInitialized: false,
  fcm: null,
};

export const login = createAsyncThunk("auth/login", async (data) => {
  const bodyFormData = new FormData();
  bodyFormData.append("UserName", data.UserName);
  bodyFormData.append("Password", data.Password);
  const response = await axios.post(`${API_URL}/api/login.php`, bodyFormData);

  return response.data;
});

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (value) => {
    const response = await axios.post(
      "/api/v2/admin/forgot-password?source=users",
      value?.data
    );
    return response.data;
  }
);

export const resetPassWord = createAsyncThunk(
  "auth/resetPassWord",
  async (value) => {
    const response = await axios.post(
      "/api/v2/admin/reset-password",
      value?.data
    );
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    init: () => ({
      ...initialState,
      isInitialized: true,
    }),
    logout: () => {
      delToken();
      // localStorage.removeItem(TOKEN_LABEL);
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => ({
        ...state,
        isPending: true,
      }))
      .addCase(login.fulfilled, (state, action) => {
        const fakeToken = action?.meta.arg.UserName;
        setToken(fakeToken);
        return {
          ...state,
          isPending: false,
          isAuthenticated: true,
          isInitialized: true,
        };
      })
      .addCase(login.rejected, (state) => {
        delToken();
        // localStorage.removeItem(TOKEN_LABEL);
        return {
          ...state,
          isPending: false,
          isAuthenticated: false,
          hasError: true,
          isInitialized: true,
        };
      });
  },
});

const authReducer = authSlice.reducer;

export const { init, logout } = authSlice.actions;

export const authSelector = (state) => state?.auth;

export default authReducer;
