import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
