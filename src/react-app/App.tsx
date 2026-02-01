import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "@/react-app/components/Layout";
import HomePage from "@/react-app/pages/Home";
import ProjectsPage from "@/react-app/pages/Projects";
import AboutPage from "@/react-app/pages/About";
import ContactPage from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
