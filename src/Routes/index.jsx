import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/MarketDashboard/MarketDashboard";
import Trade from "../Pages/Trade/Trade";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/BitPin-Frontend-Task" element={<Dashboard />} />
        <Route path="/BitPin-Frontend-Task/trade/*" element={<Trade />} />
        <Route
          path="/*"
          element={<Navigate to="/BitPin-Frontend-Task" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
