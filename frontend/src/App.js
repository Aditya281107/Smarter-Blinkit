import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import SearchPage from "./pages/SearchPage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/buyer" element={<BuyerDashboard />} />

        <Route path="/seller" element={<SellerDashboard />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/checkout" element={<Checkout />} />

      </Routes>

    </Router>
  );
}

export default App;
