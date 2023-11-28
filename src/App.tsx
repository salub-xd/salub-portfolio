import "./App.css";
import Navbar from "./components/Navbar";
import Hr from "./components/Hr";
import Profile from "./components/Profile";
import SkillCards from "./components/SkillCards";
import ProjectCards from "./components/ProjectCards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {

  return (
    <>
      <div className="bg-slate-800 h-auto">
        <Navbar />
        <Profile />
        <Hr title="Skills" _id="skill" />
        <SkillCards />
        <Hr title="Projects" _id="project" />
        <ProjectCards/>
        <Hr title="Contact" _id="contact" />
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
