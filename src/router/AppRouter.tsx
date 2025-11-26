import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import StopwatchPage from "../pages/StopwatchPage";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stopwatch" element={<StopwatchPage />} />
      </Routes>
    </BrowserRouter>
  );
};
