import React, { useRef } from "react";
import ProfileHeader from "./components/ProfileHeader";
import SkillsSection from "./components/SkillsSection";
import FeatureCards from './components/FeatureCards';
import Footer from "./components/Footer";

const App = () => {
  const projectsRef = useRef(null); // 👈 Reference to FeatureCards section

  return (
    <main className="flex flex-col mt-[2rem] gap-8 max-w-screen-xl ml-auto mr-auto bg-slate-900 text-white">
      <ProfileHeader onScrollToProjects={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })} />
      <SkillsSection />
      <FeatureCards ref={projectsRef} />
      <Footer />
    </main>
  );
};

export default App;
