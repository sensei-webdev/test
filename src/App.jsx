import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import SkillsSection from "./components/SkillsSection"

const App = () => {
  return (
    <main className="flex flex-col mt-[2rem] gap-5 bg-slate-900 text-white">
      <ProfileHeader />
      <SkillsSection />
    </main>
  );
};

export default App;
