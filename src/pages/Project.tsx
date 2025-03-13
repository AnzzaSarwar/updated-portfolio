import React from "react";
import Link from "next/link";

const projects = [
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
  {
    imgSrc: "/image.png",
    title: "Fruits Vegetables website",
    description: "Fresh and organic fruits and vegetables delivered to your doorstep, ensuring health, quality, and sustainability in every bite!",
    link: "https://my-project-olive-omega.vercel.app/"
  },
  {
    imgSrc: "/mywebsite.jpeg",
    title: "E-commerce Website",
    description: "I developed an e-commerce website for the GIAIC Hackathon using Next.js and Sanity as the headless CMS. The website offers dynamic product management, fast performance with SSR and SSG, and a seamless user experience. Sanity allows easy content updates, while Next.js ensures smooth navigation and responsiveness",
    link: "https://hacathon-phqz.vercel.app/"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 via-pink-300 to-black text-white text-center">
      <h1 className="text-5xl font-bold">Past Works</h1>
      <p className="text-gray-400 mt-2">-- You can check out my past works here --</p>
      
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-black border-2 border-white border-b-2 border-b-pink-500 rounded-xl p-6 max-w-xs text-center shadow-lg">
            <div className="w-48 h-48 mx-auto bg-gray-600 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={project.imgSrc} alt={project.title} width={192} height={192} className="object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition">
                Go now →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;