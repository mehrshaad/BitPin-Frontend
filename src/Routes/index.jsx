import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/MarketDashboard/MarketDashboard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
