import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CodePage from "./pages/CodePage";
import VisualiserPage from "./pages/VisualiserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="code" element={<CodePage />}>
          <Route path=":algorithm" element={<CodePage />} />
        </Route>
        <Route path="visualiser" element={<VisualiserPage />}>
          <Route path=":algorithm" element={<VisualiserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
