import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import React, { useState } from "react";

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <h1 className="font-bold">Startup Team Builder</h1>
        <Link to="/create" className="hover:underline">Add Member</Link>
      </nav>

      <Routes>
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
}


