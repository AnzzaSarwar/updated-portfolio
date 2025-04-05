import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Skill {
  src: string;
  alt: string;
  invert?: boolean;
}

const skills: Skill[] = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", alt: "Python" },
  { src: "https://cdn.worldvectorlogo.com/logos/next-js.svg", alt: "Next.js", invert: true },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", alt: "JavaScript" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", alt: "Git" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg", alt: "NPM" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind CSS" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg", alt: "HTML5" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg", alt: "CSS3" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", alt: "TypeScript" }
];

const SkillsSlider: React.FC = () => {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <>
    
    <div className=" py-10 bg-gradient-to-b from-black  to-gray-800 text-white">
      <h2 className="text-4xl text-center font-bold mb-7">Skills</h2>
      <p className="text-gray-400 mt-2 text-center mb-7 ">-- Have a look at some of my skills I specialized in --</p>

      <div className="mt-6 w-full max-w-5xl mx-auto px-4">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.src}
                alt={skill.alt}
                className={`w-24 h-24 md:w-32 md:h-32 object-contain transition-transform transform hover:scale-110 ${skill.invert ? 'filter invert' : ''}`}
              />
              <p className="mt-2 text-lg font-semibold">{skill.alt}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
};

export default SkillsSlider;
