import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Nav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/login-page" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Sign Up</h1>} />
      </Routes>
    </BrowserRouter>
  );
}