import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import App from "./App";
import About from "./about";
import ProductDetail from "./ProductDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>
);