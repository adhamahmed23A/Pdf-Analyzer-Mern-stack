/*
 * Imports
 */
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/main.layout";
import { HomeRoute } from "./routes/home/home.route";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeRoute />} />
        </Route>
      </Routes>
    </>
  );
}
