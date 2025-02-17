
import Typewriter from 'typewriter-effect';
import React from 'react';
import { FaFacebookSquare, FaGithub, FaInstagram } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';

function HeroSection() {
  return (
    <div><section className="body-font overflow-hidden text-sky-200">
    <div className="px-5 py-20 mx-auto h-400 w-200 bg-grey bg-transparent border-t-2 border-t-sky-500 border-spacing-2 border-s-green shadow-lg brightness-20">
        <div className="bg-gradient-to-tl ml-10 mr-12 mb-10 from-sky-400 to-black ... bg-transparent border-2 border-blue-700 border-s-4 border-s-blue-300 animate-none">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://i.pinimg.com/474x/97/38/d7/9738d789849753a27d9c9abaf29d787d.jpg" />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-sky-400 text-6xl title-font font-extrabold mb-1">Hello I'm Anza</h1><br />
                    <div className="typewriter">
                    </div>
                    <div className='text-4xl title-font font-extrabold mb-1'>
                        <Typewriter
                            options={{
                                strings: ['Welcome To My Portfolio', 'I am Governor Itcourse Student.', 'I Am a Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div><br></br>
                   
                    <br></br>
                      
                    <p className='font-medium '>A passionate developer skilled in creating efficient and scalable applications, with expertise in TypeScript, web development, and problem-solving.

</p>
<div style={{ textAlign: 'center', padding: '50px' }}>
<p className='text-sky-200  font-extrabold'>Connect with me on social media</p>

<div  style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '30px', marginTop: '20px' ,  }}>
<a  className="hover:bg-orange-950 bg-blue-900 " href="https://www.facebook.com/profile.php?id=100094477968201"  rel="noopener noreferrer">
<FaFacebookSquare />

</a>

<a  className="hover:bg-orange-950 bg-blue-900  "href="https://www.linkedin.com/in/anza-sarwar-334404254/" target="_blank" rel="noopener noreferrer">
<IoLogoLinkedin />


</a>
<a  className="hover:bg-orange-900 bg-black " href="https://github.com/Anzabajwa" target="_blank" rel="noopener noreferrer">
<FaGithub />
</a>
<a  className="hover:bg-orange-950 bg-red-700"href="https://www.instagram.com/anza_bajwa23/" target="_blank" rel="noopener noreferrer">
<FaInstagram />
</a>
</div>
</div>


            

</div>

            </div>
        </div>
    </div>
    <br></br>
    <br></br>
</section></div>
  )
}

export default HeroSection