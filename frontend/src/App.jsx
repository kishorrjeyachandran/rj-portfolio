import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Education from "./pages/Education";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>

          {/* Landing Page */}
          <Route index element={<Projects />} />

          {/* Other Pages */}
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="education" element={<Education />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;