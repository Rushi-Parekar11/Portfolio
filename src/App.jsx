import React from "react";
import HeroPage from "./HeroPage";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroPage />} />
          <Route path="/projects" element={<Projects />} />

      </Routes>
    </div>
  );
}

export default App;
