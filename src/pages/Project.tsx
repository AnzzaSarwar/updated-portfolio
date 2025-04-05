import Link from "next/link";


export default function Home() {
  return (
    <>
       
       <section className="py-20 bg-gradient-to-b from-gray-800 via-pink-300 to-black text-white text-center">
       <h1 className="text-5xl font-bold">Past Works</h1>
       <p className="text-gray-400 mt-2">-- You can check out my past works here --</p>          <div className="container px-5 py-24 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-[20px]  ">
              {[
               {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3L7aNJulgXcYGwiNfWYL9oZPQpayv7zwtKA&s",
                title: "Simple Calculator",
                description: "A fun guessing game where players try to guess the correct number within a limited number of attempts.",
                link: "https://github.com/Anzabajwa/guessing-game-.git"
              },
                
                {
                  imgSrc: "https://static.wixstatic.com/media/17ab79_9deb14989a874de1ac2fd8aa418794a2~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/17ab79_9deb14989a874de1ac2fd8aa418794a2~mv2.png",
                  title: "Resume Builder",
                  description: "A dynamic resume builder that helps users create professional resumes by customizing templates, adding details, and generating PDFs instantly.",
                  link: "https://mileston-5-unique-url-resume-by-anza.vercel.app/"
                },
                // Updated images for the last four boxes
                {
                  imgSrc: "/image.png",
                  title: "Fruits Vegetables website",
                  description: "Fresh and organic fruits and vegetables delivered to your doorstep, ensuring health, quality, and sustainability in every bite!",
                  link: "https://my-project-olive-omega.vercel.app/"
                },
                {
                  imgSrc: "/mywebsite.jpeg",
                  title: "Eccomerce Website ",
                  description: "I developed an e-commerce website for the GIAIC Hackathon using Next.js and Sanity as the headless CMS. The website offers dynamic product management, fast performance with SSR and SSG, and a seamless user experience. Sanity allows easy content updates, while Next.js ensures smooth navigation and responsiveness",
                  link: "https://hacathon-phqz.vercel.app/"
                },
              
               
              ].map((project, index) => (
                <div key={index} className="bg-black p-4 border-2 shadow-pink-300 border-t-2 border-b-2 border-b-white border-t-white border-white rounded-lg  hover:scale-105 transition-transform duration-300 ease-in-out">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative h-48 rounded overflow-hidden">
                    <img alt={project.title} className="object-cover object-center w-full h-full block" src={project.imgSrc} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-pink-100 tracking-widest title-font mb-1 font-bold text-2xl">{project.title}</h3>
                    <p className="mt-1 text-white">{project.description}</p>
                    <Link href={project.link}>
                      <button className="mt-4 text-white bg-pink-500 hover:bg-yellow-600 font-semibold py-2 px-4 rounded">
                        View Project
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      
    </>
  )
}