import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Instagram, CodeXml } from "lucide-react";

const ProfileHeader = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="h-72 w-48 mx-auto border-b-4 border-teal-400 rounded-xl overflow-hidden"
      >
        <img
          src="https://res.cloudinary.com/dttah6xlw/image/upload/v1745666140/sir-sensei-2_regwza.png"
          alt="sir-sensei"
          className="object-cover h-full w-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col gap-3"
      >
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent mb-2 inline-flex items-center gap-5">
          Abu Bakar
          <CodeXml className="w-8 h-8 text-teal-400 animate-pulse" />
        </h1>
        <h2 className="text-3xl text-gray-300">
          Frontend Developer & UI Specialist
        </h2>
        <p className="text-lg text-slate-400 max-w-lg">
          Crafting beautiful, responsive, and user-friendly web experiences with
          modern technologies.
        </p>

        <div className="mt-5 flex gap-4 items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#FeatureCards"
            className="text-xl px-6 py-4 bg-teal-500 rounded-xl"
          >
            View Projects
          </motion.a>

          <span className="flex items-center gap-4">
            {[
              {
                icon: <Github className="w-8 h-8" />,
                link: "https://github.com/sensei-webdev",
              },
              {
                icon: <Instagram className="w-8 h-8" />,
                link: "https://www.instagram.com/sensei.webdev?igsh=MXgxODJmbXkyMTVqaA==",
              },
              {
                icon: <Mail className="w-8 h-8" />,
                link: "mailto:contact.sensei.ux@gmail.com",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfileHeader;
