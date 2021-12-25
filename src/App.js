import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Registration from "./routes/Registration";
import Matchinput from "./routes/Matchinput";
import Signin from "./routes/Signin";
import Playerscore from "./routes/Playerscore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/matchinput" element={<Matchinput />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/playerscore" element={<Playerscore />} />
      </Routes>
    </Router>
  );
}

export default App;
