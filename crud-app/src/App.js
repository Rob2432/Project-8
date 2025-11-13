import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#2563eb", color: "white", display: "flex", justifyContent: "space-between" }}>
        <h1>Startup Team Builder</h1>
        <Link to="/create" style={{ color: "white", textDecoration: "underline" }}>Add Member</Link>
      </nav>

      <Routes>
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
