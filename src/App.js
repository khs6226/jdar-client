import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Registration from "./routes/Registration";
import Matchinput from "./routes/Matchinput";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/matchinput" element={<Matchinput />} />
      </Routes>
    </Router>
  );
}

export default App;
