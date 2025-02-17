import Link from "next/link";


export default function Home() {
  return ( 
  <>
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
<section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-black-300">
    <iframe 
      width="100%" 
      height="100%" 
      frameBorder="2" 
      title="map" 
      scrolling="no" 
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
      style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
    ></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex ">
    <div className="lg:w-1/3 md:w-1/2  rounded-lg p-8  bg-gradient-to-t from-black to-sky-950 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-white">Fill your form</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-sky-200">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="w-full bg-white rounded border border-brown-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-sky-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-sky-200">Message</label>
        <textarea 
          id="message" 
          name="message" 
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <button className="text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">"Share your thoughts with us and help shape a better future through meaningful feedback today.</p>
    </div>
  </div>
</section>


      

  </div>
  </>
  )
  }