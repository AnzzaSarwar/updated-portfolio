import Header from "./Header";


export default function AboutUs() {
  return ( 
  <>
   <Header />
  <div>
       <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-row px-5 py-24 justify-center items-center shadow-pink-400    ml-5  mt-10  ">
    <img     className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-[0_20px_50px_-10px_rgba(219,39,119,0.9)]"
 alt="hero" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIM1tji9ivCFw_zseqFtPISGUUvj-4CyMqhgvU8JAT3yD7IHSJjp_t9gDvwxYyMkPR5jM&usqp=CAU">
  </img>  <div className="w-full  md:w-2/3 flex flex-col mb-16 items-center text-center ">
      <h1 className="ml-3 mb-10 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white">About Me </h1>
      <br></br>
      <h2 className="title-font  mb-4 mt-0 text-white font-serif text-4xl"> I'm Anza Sarwar, I'm Frontend Developer </h2>

      <br></br><p className="mb-8 leading-relaxed text-pink-200 ml-10 ">Hi, I'm  a full-stack web developer with 6 months of experience in creating efficient and responsive web solutions. My expertise lies in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind. I have a strong passion for turning ideas into user-friendly websites and applications. With a background in matric education, I am continually learning and growing in the field of web development. I'm enthusiastic about solving challenges and building innovative solutions. Feel free to check out my portfolio or get in touch for collaboration opportunities!

</p>






       
    </div>
  </div>
</section>
    
      

  </div>
  <br /><br /><br /><br />
  <footer className="text-gray-600 body-font bg-gradient-to-t from-black to-pink-600">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-sky-200">
    
    <img className="w-10 h-10 rounded-full" src="https://as1.ftcdn.net/v2/jpg/03/75/67/74/1000_F_375677469_UzQt3JpGywuXxkOlCkG7SJXXbiGsampv.jpg" alt="my image" />

      <span className="ml-3 text-xl ">Anza Sarwar</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Anza Portfolio-
      <a href="https://twitter.com/knyttneve" className="text-sky-100 ml-1" rel="noopener noreferrer" target="_blank">@msarwarbajwamsarwarbajwa@gmail.com</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
  </>
  )
  }