import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Admin } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
