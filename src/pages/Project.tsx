import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-800 via-pink-300 to-black text-white text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Past Works</h1>
        <p className="text-gray-200 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          -- You can check out my past works here --
        </p>

        <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3L7aNJulgXcYGwiNfWYL9oZPQpayv7zwtKA&s",
                title: "Simple Calculator",
                description:
                  "A fun guessing game where players try to guess the correct number within a limited number of attempts.",
                link: "https://github.com/Anzabajwa/guessing-game-.git",
              },
              {
                imgSrc:
                  "https://static.wixstatic.com/media/17ab79_9deb14989a874de1ac2fd8aa418794a2~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/17ab79_9deb14989a874de1ac2fd8aa418794a2~mv2.png",
                title: "Resume Builder",
                description:
                  "A dynamic resume builder that helps users create professional resumes by customizing templates, adding details, and generating PDFs instantly.",
                link: "https://mileston-5-unique-url-resume-by-anza.vercel.app/",
              },
              {
                imgSrc: "/image.png",
                title: "Fruits Vegetables website",
                description:
                  "Fresh and organic fruits and vegetables delivered to your doorstep, ensuring health, quality, and sustainability in every bite!",
                link: "https://my-project-olive-omega.vercel.app/",
              },
              {
                imgSrc: "/mywebsite.jpeg",
                title: "Ecommerce Website",
                description:
                  "Built for GIAIC Hackathon using Next.js + Sanity. Features fast SSR/SSG, dynamic product CMS, and sleek, responsive UI.",
                link: "https://hacathon-phqz.vercel.app/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-black p-5 border-2 border-white rounded-lg shadow-lg hover:scale-[1.03] transition-transform duration-300"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-48 sm:h-56 md:h-48 lg:h-40 rounded overflow-hidden"
                >
                  <img
                    alt={project.title}
                    className="object-cover object-center w-full h-full"
                    src={project.imgSrc}
                  />
                </a>
                <div className="mt-4 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-pink-100 mb-1">{project.title}</h3>
                  <p className="text-sm sm:text-base text-white">{project.description}</p>
                  <Link href={project.link}>
                    <button className="mt-4 bg-pink-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
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
  );
}
