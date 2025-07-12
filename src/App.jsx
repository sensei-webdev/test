import React from "react";
import ProfileHeader from "./components/ProfileHeader"
import SkillsSection from "./components/SkillsSection"
import FeatureCards from './components/FeatureCards'

const App = () => {
  return (
    <main className="flex flex-col mt-[2rem] gap-12 bg-slate-900 text-white">
      <ProfileHeader />
      <SkillsSection />
      <FeatureCards />
    </main>
  );
};

export default App;
