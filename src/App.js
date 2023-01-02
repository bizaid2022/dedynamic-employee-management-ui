import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Skeleton } from "antd";
import "./App.css";
import { Login } from "./pages/login";
import { Suspense, useEffect } from "react";
import { AppLayout } from "./components/layout/AppLayout";
import { MainPage } from "./pages/mainPage";
import {
  setupRequestInterceptor,
  setupResponseInterceptor,
} from "./app/axioxInceptors";
import { ForbiddenPage } from "./pages/notFound/ForbiddenPage";

function App() {

  useEffect(() => {
    setupResponseInterceptor();
    setupRequestInterceptor();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Skeleton active />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/auth/home" element={<MainPage />} />
          <Route path="/auth/*" element={<AppLayout />} />
          <Route path="/*" element={<ForbiddenPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
