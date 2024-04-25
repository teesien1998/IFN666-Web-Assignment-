import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import BlogArchive from "./page/BlogArchive";
import ProjectsArchive from "./page/ProjectsArchive";
import Resume from "./page/Resume";
import Error from "./page/Error404";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogArchive />} />
        <Route path="/projects" element={<ProjectsArchive />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
