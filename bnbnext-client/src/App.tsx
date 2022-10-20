import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import { Admin, Login, Users, SignUp, Home, Regitser } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Regitser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
