import React from 'react'
import {
  LayoutIcon,
  CodeIcon,
  PaintbrushIcon,
  FramerIcon,
  GanttChartIcon,
  BarChartIcon,
} from 'lucide-react'

const SkillsSection = () => {
  return (
    <main>
      <h1 className='flex items-center gap-2 text-3xl font-semibold my-5'>
        <span><GanttChartIcon className='w-10 h-10 text-purple-400' /></span>
        Skills & Experties
      </h1>
      <section className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className="border rounded-xl border-slate-500 p-5 bg-slate-800 backdrop-blur-sm">
          <span className='flex gap-3 items-center mb-4'>
            <CodeIcon className='bg-gradient-to-r from-teal-300 to-teal-500 w-10 h-10 p-2 rounded' />
            React
          </span>
          <div className="w-full h-3 bg-gradient-to-r from-teal-300 to-teal-500 rounded-full"></div>
        </div>
        <div className="border rounded-xl border-slate-500 p-5 bg-slate-800 backdrop-blur-sm">
          <span className='flex gap-3 items-center mb-4'>
            <CodeIcon className='bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 p-2 rounded' />
            Performance
          </span>
          <div className="w-full h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>
        <div className="border rounded-xl border-slate-500 p-5 bg-slate-800 backdrop-blur-sm">
          <span className='flex gap-3 items-center mb-4'>
            <CodeIcon className='bg-gradient-to-r from-blue-600 to-blue-400 w-10 h-10 p-2 rounded' />
            UI/UX
          </span>
          <div className="w-full h-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>
        <div className="border rounded-xl border-slate-500 p-5 bg-slate-800 backdrop-blur-sm">
          <span className='flex gap-3 items-center mb-4'>
            <CodeIcon className='bg-gradient-to-r from-cyan-500 to-teal-400 w-10 h-10 p-2 rounded' />
            Javascript
          </span>
          <div className="w-full h-3 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"></div>
        </div>
        <div className="border rounded-xl border-slate-500 p-5 bg-slate-800 backdrop-blur-sm">
          <span className='flex gap-3 items-center mb-4'>
            <CodeIcon className='bg-gradient-to-r from-red-500 to-orange-400 w-10 h-10 p-2 rounded' />
            CSS/Tailwind
          </span>
          <div className="w-full h-3 bg-gradient-to-r from-red-500 to-orange-400 rounded-full"></div>
        </div>
        <div className="border rounded-xl border-slate-500 p-5 bg-slate-800 backdrop-blur-sm">
          <span className='flex gap-3 items-center mb-4'>
            <CodeIcon className='bg-gradient-to-r from-green-500 to-emerald-400 w-10 h-10 p-2 rounded' />
            Motion Design
          </span>
          <div className="w-full h-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
        </div>
      </section>
    </main>
  )
}

export default SkillsSection
