import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import SkillBridge from "./components/SkillBridge";

const HomeContent = () => (
  <>
    <Hero />
    <TechStack />
    <Work />
    <Projects />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="h-full w-full mx-auto max-w-[47.5rem] p-6">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/projects/skill-bridge" element={<SkillBridge />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
