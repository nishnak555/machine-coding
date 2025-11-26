import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import StopwatchPage from "../pages/StopwatchPage";
import TicTocToe from "../pages/Tic-Toc-Toe";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stopwatch" element={<StopwatchPage />} />
        <Route path="/tic-toc-toe" element={<TicTocToe />} />
      </Routes>
    </BrowserRouter>
  );
};
