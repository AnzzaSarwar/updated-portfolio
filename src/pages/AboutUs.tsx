import { Inter } from "next/font/google";
import Link from "next/link";


export default function AboutUs() {
  return ( 
  <>
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
  <div>
       <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-row px-5 py-24 justify-center items-center  bg-gradient-to-tl from-black to-sky-900 border-2 border-sky-300 border-e-sky-700 border-s-sky-200 border-solid h-30 w-50 ml-5  mt-10  animate-pulse">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded h-50" alt="hero" src="https://i.pinimg.com/564x/cd/ff/da/cdffda22e503a7967325c791d1e1d993.jpg">
  </img>  <div className="w-full  md:w-2/3 flex flex-col mb-16 items-center text-center ">
      <h1 className="title-font  mb-4 mt-0 text-blue-400 font-extrabold text-6xl bg-black border-2 border-sky-300  border-s-sky-500 border-e-sky-300">About Me </h1>
      <br></br>
      <h2 className="title-font  mb-4 mt-0 text-white font-serif text-4xl"> I'm Anza Sarwar, I'm Frontend Developer </h2>

      <br></br><p className="mb-8 leading-relaxed text-sky-200 ml-10 ">Hi, I'm  a full-stack web developer with 6 months of experience in creating efficient and responsive web solutions. My expertise lies in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind. I have a strong passion for turning ideas into user-friendly websites and applications. With a background in matric education, I am continually learning and growing in the field of web development. I'm enthusiastic about solving challenges and building innovative solutions. Feel free to check out my portfolio or get in touch for collaboration opportunities!

</p>






      <div className="flex w-full justify-center items-end">
       
      </div>
    </div>
  </div>
</section>
    
      

  </div>
  </>
  )
  }