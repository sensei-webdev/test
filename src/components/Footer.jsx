import React from 'react'
import { CodeXml, Instagram, Mail, Github } from "lucide-react";

const Footer = () => {
    return (
        <footer className='bg-[rgba(0,0,0,0.5)] rounded-t-3xl p-4 lg:px-20 lg:py-8 border-x-[1px] border-t-[1px] border-gray-500'>
            <div className='flex justify-between items-center flex-col md:flex-row'>
                <div className='flex gap-4 items-center'>
                    <CodeXml className='h-10 w-10 md:h-14 md:w-14' />
                    <div>
                        <p className='text-2xl md:text-3xl lg:text-5xl font-bold'>Abu Bakar</p>
                        <p className='text-sm md:text-lg text-gray-500'>aka Sensei</p>
                    </div>
                </div>
                <p className='text-sm md:text-lg text-gray-300'>©2025 Abu Bakar - Sensei All Rights Reserved</p>
            </div>
            <div className='flex justify-evenly max-w-md ml-auto mr-auto mt-5'>
                {[
                    {
                        icon: <Github className="w-8 h-8" />,
                        link: "https://github.com/sensei-webdev",
                    },
                    {
                        icon: <Instagram className="w-8 h-8" />,
                        link: "https://www.instagram.com/abu_bakar_hasan?igsh=eTZrZ2VkbG83ajIx",
                    },
                    {
                        icon: <Mail className="w-8 h-8" />,
                        link: "mailto:contact.sensei.ux@gmail.com",
                    },
                ].map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className='text-gray-400 active:scale-90 hover:scale-110 hover:text-teal-500 transition duration-300'>
                        {item.icon}
                    </a>
                ))}
            </div>

        </footer>
    )
}

export default Footer
