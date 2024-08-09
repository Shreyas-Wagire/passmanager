import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-purple-500'>&lt;</span>
                    <span>Pass</span><span className='text-purple-500'>KEEPER/&gt;</span>
                </div>
                
                <a 
                    href="https://mindmater.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-white text-purple-200 my-5 mx-2 rounded-full flex justify-between items-center ring-white ring-1'
                >
                    <span className='font-bold px-2'>Flash Note</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
