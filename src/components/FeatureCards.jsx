import React from 'react';
import { motion } from 'framer-motion';
import { FolderIcon } from 'lucide-react';

const projects = [
  {
    title: 'Modern Educational Website',
    description: 'Built using Tailwind CSS. Fully responsive and mobile friendly.',
    image: 'https://res.cloudinary.com/dttah6xlw/image/upload/v1745667377/cttc-home_wkyn8f.png',
    link: 'https://cttc.imabubakar.xyz/',
  },
  {
    title: 'Tradational Landing Page',
    description: 'Built with HTML, CSS & JavaScript only. Responsive design for all devices.',
    image: 'https://res.cloudinary.com/dttah6xlw/image/upload/v1752300073/Screenshot_2025-07-12_113042_btvxdh.png',
    link: 'https://gtg.imabubakar.xyz/',
  }
];

const ProjectCard = ({ title, description, image, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, amount: 0.3 }}
    className="w-80 h-96 bg-[rgba(255,255,255,0.05)] border border-gray-400 backdrop-blur-md rounded-2xl p-2 hover:scale-[1.01] transition-all duration-300"
  >
    <img
      src={image}
      alt={title}
      className="rounded-t-xl w-full h-[150px] object-cover"
    />
    <div className="flex flex-col gap-2 mt-2 h-[calc(100%-170px)]">
      <h2 className="font-bold text-xl text-white">{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-2/3 mt-auto ml-auto mr-auto inline-block bg-blue-600 hover:bg-blue-500 text-white text-xl tracking-wider text-center font-medium py-2 rounded-xl transition-all duration-300 hover:scale-105"
      >
        Visit
      </a>
    </div>
  </motion.div>
);

const FeatureCards = () => {
  return (
    <main id='Projects'>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 text-3xl font-semibold mb-4 text-white"
      >
        <FolderIcon className='text-yellow-500 w-10 h-10' />
        Featured Projects
      </motion.h1>

      <section className="flex flex-wrap gap-6 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} delay={index * 0.1} />
        ))}
      </section>
    </main>
  );
};

export default FeatureCards;
