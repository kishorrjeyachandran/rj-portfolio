import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Github from "./pages/Github";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>

          {/* Landing Page */}
          <Route index element={<Projects />} />

          {/* Other Pages */}
          <Route path="about" element={<About />} />
          <Route path="github" element={<Github />} />
          <Route path="skills" element={<Skills />} />
          <Route path="resume" element={<Resume />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;