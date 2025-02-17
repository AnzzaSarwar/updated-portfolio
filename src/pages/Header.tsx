import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
         <header className='text-grey-600 body-font bg-gradient-to-br from-black to-sky-950'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center '>
                    <a className='flex titlefont font-medium items-center text-grey-900 mb-4 md:mb-0 '>
                        <img className="w-10 h-10 rounded-full" src="https://as1.ftcdn.net/v2/jpg/03/75/67/74/1000_F_375677469_UzQt3JpGywuXxkOlCkG7SJXXbiGsampv.jpg" alt="my image" />
                        <span className='ml-3 text-xl text-sky-500 font-extrabold'>Anza Sarwar</span>
                    </a>

                    <nav className=' md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-grey-400 flex flex-wrap items-end text-base justify-end ml-20'>
                    <Link className='ml-2 mr-5 text-sky-500 hover:text-yellow-600 border-2 border-e-4 border-e-sky-950 hover:bg-gradient-to-t from-black to-slate-600 px-4 py-2  border-sky-300' href="/">Home </Link>             

                    <Link className='ml-2 mr-5 text-sky-500 hover:text-yellow-600 border-2 border-e-4 border-e-sky-950 hover:bg-gradient-to-t from-black to-slate-600 px-4 py-2  border-sky-300' href="/AboutUs">AboutUs</Link>                     

                        <Link className='ml-2 mr-5 text-sky-500 hover:text-yellow-600 border-2 border-e-4 border-e-sky-950 border-sky-300  hover:bg-gradient-to-t from-black to-slate-600 px-4 py-2  ' href="/Skills">My Skills</Link>                      
                       <Link className='ml-2 mr-5 text-sky-500 hover:text-yellow-600 border-2 border-e-4 border-e-sky-950 border-sky-300  hover:bg-gradient-to-t from-black to-slate-600 px-4 py-2 ' href="/Project">My Project</Link>                      
                <Link className='ml-2 mr-5 text-sky-500 hover:text-yellow-600 border-2 border-e-4 border-e-sky-950 border-sky-300  hover:bg-gradient-to-t from-black to-slate-600 px-4 py-2 ' href="/Contact">Contact Us</Link>                      

                    </nav>
                </div>
            
              </header>
    </div>
  )
}

export default Header