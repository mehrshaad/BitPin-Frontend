import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/MarketDashboard/MarketDashboard";
import Trade from "../Pages/Trade/Trade";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
