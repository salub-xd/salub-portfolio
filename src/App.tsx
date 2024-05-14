import "./App.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

import Navbar from "./components/Navbar";
import Hr from "./components/Hr";
import Profile from "./components/Profile";
import SkillCards from "./components/SkillCards";
import ProjectCards from "./components/ProjectCards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useState } from "react";
import Container from "./components/Container";

function App() {

  const [changeColor, setChangeColor] = useState<Boolean>(true);
  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  });

  return (
    <>
      <div className={changeColor ? 'h-auto bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' : 'bg-slate-800  h-auto'}>
        <p onClick={(() => { setChangeColor(!changeColor) })} className="z-50 absolute right-12 top-16 rounded-full sm:fixed sm:right-14 sm:top-24 ">
          <img className="rounded-full text-white fill-white bg-white w-7 sm:w-10"
            src='https://www.svgrepo.com/show/361086/color-mode.svg' alt="" />
        </p>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Navbar />
        <Container>
          <Profile />
          <Hr title="Skills" _id="skill" />
          <SkillCards />
          <Hr title="Projects" _id="project" />
          <ProjectCards />
          <Hr title="Contact" _id="contact" />
          <Contact />
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default App;
