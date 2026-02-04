import { useState, useEffect } from "react";
import Navbar from "./components/common/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Learn from "./pages/Learn.jsx";
import Quiz from "./pages/Quiz.jsx";
import Footer from "./components/common/Footer.jsx";
import "./styles/App.css";
import

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="app-container">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
