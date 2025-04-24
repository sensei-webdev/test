import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutIcon,
  CodeIcon,
  PaintbrushIcon,
  FramerIcon,
  GanttChartIcon,
  BarChartIcon,
} from 'lucide-react';

const skills = [
  {
    name: 'React',
    icon: <CodeIcon className="bg-gradient-to-r from-teal-300 to-teal-500 w-10 h-10 p-2 rounded" />,
    barColor: 'from-teal-300 to-teal-500',
  },
  {
    name: 'Performance',
    icon: <BarChartIcon className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 p-2 rounded" />,
    barColor: 'from-purple-500 to-pink-500',
  },
  {
    name: 'UI/UX',
    icon: <PaintbrushIcon className="bg-gradient-to-r from-blue-600 to-blue-400 w-10 h-10 p-2 rounded" />,
    barColor: 'from-blue-600 to-blue-400',
  },
  {
    name: 'Javascript',
    icon: <CodeIcon className="bg-gradient-to-r from-cyan-500 to-teal-400 w-10 h-10 p-2 rounded" />,
    barColor: 'from-cyan-500 to-teal-400',
  },
  {
    name: 'CSS/Tailwind',
    icon: <LayoutIcon className="bg-gradient-to-r from-red-500 to-orange-400 w-10 h-10 p-2 rounded" />,
    barColor: 'from-red-500 to-orange-400',
  },
  {
    name: 'Motion Design',
    icon: <FramerIcon className="bg-gradient-to-r from-green-500 to-emerald-400 w-10 h-10 p-2 rounded" />,
    barColor: 'from-green-500 to-emerald-400',
  },
];


const SkillCard = ({ name, icon, barColor, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, amount: 0.3 }}
    className="border rounded-xl border-slate-500 p-5 bg-slate-800 backdrop-blur-sm"
  >
    <span className="flex gap-3 items-center mb-4">
      {icon}
      {name}
    </span>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      transition={{ duration: 1, delay: delay + 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`h-3 bg-gradient-to-r ${barColor} rounded-full`}
    />
  </motion.div>
);


const SkillsSection = () => {
  return (
    <main>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 text-3xl font-semibold my-5"
      >
        <span>
          <GanttChartIcon className="w-10 h-10 text-purple-400" />
        </span>
        Skills & Expertise
      </motion.h1>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} delay={index * 0.1} />
        ))}
      </section>
    </main>
  );
};

export default SkillsSection;
