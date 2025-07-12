import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-[rgba(255,255,255,0.08)] flex justify-between items-center w-[95%] p-2 rounded-full mx-auto '>
            <span className='text-xl font-bold ml-5 tracking-[0.2rem]'>
                Sensei
            </span>
            <span className='flex gap-5 mr-5'>
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
            </span>
        </nav>
    )
}

export default Navbar
