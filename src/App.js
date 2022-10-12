import { BrowserRouter, Routes, Route } from "react"
import { StockListPage } from "./pages/stockListPage";
import { StockDetailPage } from "./pages/stockDetailPage";

import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockListPage />} />
          <Route path="/detail/:symbol" element={<StockDetailPage />} />
        </Routes>
      </BrowserRouter>

    </main>
  );
}

export default App;
