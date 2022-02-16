import React from "react";
import { Route, Routes } from "react-router-dom";

import Page from "./pages/Page";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <div>
      <h1>Charity Islands</h1>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
