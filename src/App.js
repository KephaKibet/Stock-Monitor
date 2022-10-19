import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StockListPage } from "./pages/stockListPage";
import { StockDetailPage } from "./pages/stockDetailPage";
import { WatchListContextProvider } from "./context/context";

import './App.css';

function App() {
  return (
    <main className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockListPage />} />
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
          </Routes>
          </BrowserRouter>
        </WatchListContextProvider>
    </main>
  );
}

export default App;
