import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import AuthRouter from "./components/AuthRouter";
import PrivateRouter from "./components/PrivateRouter";

// pages
import {
  LoginPage,
  Users,
  Home,
  Regitser,
  NotFoundPage,
  Collection,
  Products,
  Stories,
} from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Authentication */}
          <Route path="/" element={<AuthRouter />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Regitser />} />
          </Route>

          {/* Admin */}
          <Route path="/admin" element={<PrivateRouter />}>
            <Route path="/admin" element={<Navigate to="/admin/users" />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/collections" element={<Collection />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/stories" element={<Stories />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
