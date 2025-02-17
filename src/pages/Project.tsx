import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
       

        <section className="text-gray-600 body-font">
          <h1 className="text-white text-5xl font-bold text-center mt-5">My  Projects</h1>
          <div className="container px-5 py-24 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
               {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3L7aNJulgXcYGwiNfWYL9oZPQpayv7zwtKA&s",
                title: "Guessing Game",
                description: "A fun guessing game where players try to guess the correct number within a limited number of attempts.",
                link: "https://github.com/Anzabajwa/guessing-game-.git"
              },
                {
                  imgSrc: "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/9b95118e-f690-4881-89f1-c596b46e3504?w=200&h=200",
                  title: "Guessing Game",
                  description: "A fun guessing game where players try to guess the correct number within a limited number of attempts.",
                  link: "https://github.com/Anzabajwa/guessing-game-.git"
                },
                {
                  imgSrc: "https://www.shutterstock.com/shutterstock/photos/2034915530/display_1500/stock-vector-vector-illustration-of-the-currency-exchange-of-gold-coins-from-dollars-to-euros-arrows-gold-coins-2034915530.jpg",
                  title: "Currency Converter",
                  description: "A simple currency converter tool that allows users to quickly convert between different currencies using real-time exchange rates.",
                  link: "https://github.com/Anzabajwa/currency-converter.git"
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
                <div key={index} className="bg-gradient-to-b from-black to-sky-950 p-4 border-2 border-t-2 border-b-2 border-b-white border-t-white border-blue-400 rounded-lg shadow-lg transition transform hover:scale-105">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative h-48 rounded overflow-hidden">
                    <img alt={project.title} className="object-cover object-center w-full h-full block" src={project.imgSrc} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-sky-500 tracking-widest title-font mb-1 font-bold text-2xl">{project.title}</h3>
                    <p className="mt-1 text-sky-200">{project.description}</p>
                    <Link href={project.link}>
                      <button className="mt-4 text-white bg-sky-500 hover:bg-yellow-600 font-semibold py-2 px-4 rounded">
                        View Project
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}