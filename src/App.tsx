/*
 * Imports
 */
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/main.layout";
import { HomeRoute } from "./routes/home/home.route";
import { AuthLayout } from "./layouts/auth.layout";
import { LoginRoute } from "./routes/auth/login.route";
import { SignupRoute } from "./routes/auth/signup.route";
import { DashboardLayout } from "./layouts/dashboard.layout";
import { ChatRoute } from "./routes/chat/chat.route";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeRoute />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginRoute />} />
          <Route path="signup" element={<SignupRoute />} />
        </Route>
        <Route path="/chat/:id" element={<DashboardLayout />}>
          <Route index element={<ChatRoute />} />
        </Route>
      </Routes>
    </>
  );
}
