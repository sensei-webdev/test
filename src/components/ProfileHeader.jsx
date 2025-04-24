import React from "react";
import { Mail, Github, Instagram } from "lucide-react";

const ProfileHeader = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4">
      <div className="h-72 w-48 mx-auto border-y-4 border-teal-400 rounded-xl overflow-hidden">
        <img
          src="https://github.com/AbuBakar5173/imagesDataBase/blob/main/sir-sensei-2.png?raw=true"
          alt="sir-sensei"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent mb-2">
          I'm <span>Abu Bakar</span>
        </h1>
        <h2 className="text-3xl text-gray-300">
          Frontend Developer & UI Specialist
        </h2>
        <p className="text-lg text-slate-400 max-w-lg">
          Crafting beautiful, responsive, and user-friendly web experiences with
          modern technologies.
        </p>
        <div className="mt-5 flex gap-4 items-center">
          <a href="#" className="text-xl px-6 py-4 bg-teal-500 rounded-xl">
            View Projects
          </a>
          <span className="flex items-centers gap-4">
            <a href="#" >
              <Github  className="w-8 h-8"/>
            </a>
            <a href="#">
              <Instagram  className="w-8 h-8"/>
            </a>
            <a href="#">
              <Mail  className="w-8 h-8"/>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
