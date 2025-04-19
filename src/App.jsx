import { useState, useEffect } from 'react'
import { FaGithub, FaInstagram, FaTwitter,FaGitAlt  } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { FaLinkedin, FaXTwitter, FaYoutube, FaGoogleDrive, FaReact, FaNodeJs, FaJava,FaHtml5 ,FaCss3  } from "react-icons/fa6";
import { IoLogoJavascript, IoEarth } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss, SiSass, SiFramer, SiReact, SiWhatsapp } from "react-icons/si";
import { TbSql } from "react-icons/tb";

import { RiWhatsappFill } from "react-icons/ri";
import pic from './assets/myimgcrop.jpeg'
import Project1 from './assets/project1.png'
import Project2 from './assets/project2.png'
import Project3 from './assets/project3.png'
import emailjs from '@emailjs/browser';

function App() {
  const [loading, setloading] = useState(false);
  const [blur, setBlur] = useState(true);

  (function () {
    emailjs.init({
      publicKey: "hRXoKZKMGyCaLjyyE",
    });
  })();

  function sendMail(event) {
    setloading(true);
    event.preventDefault();

    const parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_o0ryjxg", "template_d0wua58", parms)
      .then((response) => {
        setloading(false);
        toast.success("Email sent successfully!");
      }, (error) => {
        toast.error("Failed to send email. Please try again.");
      });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlur(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='min-h-screen w-full bg-[#18181b] flex justify-center'>
        <div className={`w-full bg-[#18181b] flex justify-center transition-all duration-1000 ${blur ? "blur-md" : "blur-0"}`}>
          <div className="w-full lg:w-[45%] px-4 lg:px-0 py-6 lg:py-0">
            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:h-[19vh] mt-6">
              <img src={pic} alt="Rushikesh Parekar" className="w-24 h-24 lg:w-25 lg:h-25 rounded-full" />
              <div className='ml-0 lg:ml-4 mt-4 lg:mt-0 text-center lg:text-left'>
                <h1 className='text-[#ffffff] text-[18px] font-semibold mb-1'>Rushikesh Parekar</h1>
                <h5 className='text-[#a3a3a3] text-[14px] mb-1'>Computer science & Engineering | Full Stack | Java</h5>
                <div
                  className="h-[25px] text-white w-[124px] border-1 border-[#4b4b4b] rounded-2xl flex mt-1 justify-center items-center gap-2 mx-auto lg:mx-0"
                  onClick={() => window.open('https://drive.google.com/file/d/1biVPkQOg74n8djMU3Ld5mELGo7TP_pSu/view?usp=sharing', '_blank')}
                >
                  <FaGoogleDrive className='h-[13px] w-[13px]' />
                  <h3 className='text-[12px] font-medium cursor-pointer'>View Resume</h3>
                </div>

              </div>
            </div>

            {/* About Section */}
            <div className="mt-8 lg:mt-2">
              <h1 className='text-white text-[18px] font-medium'>About</h1>
              <div className="text-gray-300 mt-3">
                <p className="font-medium text-[14px] text-[#a3a3a3]" style={{ lineHeight: '25px', wordSpacing: '0.3em' }}>
                  I am a pre-final year B.Tech computer science student passionate about web development, with experience in the MERN stack and Java. I enjoy creating dynamic, user-friendly web applications and am eager to learn and grow :)
                </p>
                <p className="font-medium text-[14px] mt-4 text-[#a3a3a3]">
                  You can find me on
                  <a href="https://www.linkedin.com/in/rushikesh-parekar/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-yellow-400"> LinkedIn</a>,
                  <a href="https://github.com/Rushi-Parekar11" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-yellow-400"> GitHub</a>, or
                  <a href="https://x.com/Rushikeshp62166" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-yellow-400"> twitter</a>
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-8 lg:mt-8">
              <div className='flex flex-wrap gap-2 mt-2'>
                {[
                  { icon: <IoLogoJavascript className="h-[14px] w-[14px]" />, name: "Javascript" },
                  { icon: <FaJava className="h-[14px] w-[14px]" />, name: "Java" },
                  { icon: <FaReact className="h-[14px] w-[14px]" />, name: "React.js" },
                  { icon: <SiExpress className="h-[14px] w-[14px]" />, name: "Express.js" },
                  { icon: <FaNodeJs className="h-[14px] w-[14px]" />, name: "Node.js" },
                  { icon: <SiMongodb className="h-[14px] w-[14px]" />, name: "Mongodb" },
                  { icon: <TbSql className="h-[14px] w-[14px]" />, name: "SQL" },
                  { icon: <SiTailwindcss className="h-[14px] w-[14px]" />, name: "Tailwind" },
                  { icon: <SiSass className="h-[14px] w-[14px]" />, name: "Sass" },
                  { icon: <SiFramer className="h-[14px] w-[14px]" />, name: "Framer Motion" },
                  { icon: <FaHtml5  className="h-[14px] w-[14px]" />, name: "HTML/CSS" }, 
                  { icon: <FaGitAlt  className="h-[14px] w-[14px]" />, name: "Git" },
                  { icon: <FaGithub className="h-[14px] w-[14px]" />, name: "Github" },
                ].map((skill, index) => (
                  <div key={index} className="h-[24px] min-w-[103px] text-[#a3a3a3] hover:text-white hover:border-white w-fit px-3 border-[1px] border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-300">
                    {skill.icon}
                    <h3 className="text-[12px] font-medium">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="mt-10 lg:mt-5">
              <h1 className='text-white text-[18px] font-medium mb-3'>Project & Work</h1>

              {/* Project Cards */}
              {[
                {
                  id: 1,
                  title: "DokJan",
                  description: "Contributed to the development of WorthEat, a real-time mess management system for IT companies, enhancing meal planning, order management, and user interactions.",
                  githubLink: "https://github.com/Rushi-Parekar11/Project_Management_Web",
                  hostedLink: "https://github.com/Rushi-Parekar11/Project_Management_Web",
                  image: Project3
                },
                {
                  id: 2,
                  title: "CryptoCraft",
                  description: "A crypto learning platform where users can buy coins at real-time prices, and track profits/losses. It provides real-time market insights and interactive charts for better decision-making.",
                  githubLink: "https://github.com/Rushi-Parekar11/Cryptocraft",
                  hostedLink: "https://cryptocraft-green.vercel.app/",
                  image: Project2
                },
                {
                  id: 3,
                  title: "WorthEat",
                  description: "Contributed to the development of WorthEat, a real-time mess management system for IT companies, enhancing meal planning, order management, and user interactions.",
                  githubLink: "https://github.com/Lunch-Booking-System/LunchBookingSystem",
                  hostedLink: "https://www.wortheat.in",
                  image: Project1
                }
              ].map((project) => (
                <div key={project.id} className="relative w-full rounded-lg overflow-hidden shadow-lg mb-5 group">
                  {/* Image - Hidden on mobile, shown on desktop hover */}
                  <div className="hidden lg:block absolute left-0 h-full w-2/5 overflow-hidden transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
                    <a href={project.hostedLink}><img src={project.image} alt={project.title} className="h-full w-full object-cover" /></a>
                  </div>

                  {/* Text Content - Always visible */}
                  <div className="w-full px-4 py-4 lg:group-hover:ml-[40%] transition-all duration-300">
                    <h4 className="text-white text-[15px]">{project.title}</h4>
                    <p className="text-[#a3a3a3] font-medium text-[13px] mt-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-white mt-3">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <div className="flex items-center justify-center gap-1">
                          <FaGithub className="h-4 w-4" />
                          <p className='text-[13px]'>View Repo</p>
                        </div>
                      </a>
                      <a href={project.hostedLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <div className="flex items-center justify-center gap-1">
                          <IoEarth className="h-4 w-4" />
                          <p className='text-[13px]'>Hosted Link</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className='border-[#4b4b4b] mt-4' />

            {/* Contact Section */}
            <div className="flex w-full justify-center text-white mt-8">
              <h1 className='text-white text-[20px] font-medium'>Contact</h1>
            </div>
            <form className="max-w-sm mx-auto p-6 bg-[#18181b] rounded-2xl">
              <div className="mb-4">
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 border border-[#4b4b4b] text-[13px] rounded-lg shadow-sm 
             focus:ring-primary focus:border-primary text-white dark:text-white 
             placeholder-[#4b4b4b] bg-transparent autofill:bg-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border border-[#4b4b4b] text-[13px] rounded-lg shadow-sm 
             focus:ring-primary focus:border-primary text-white dark:text-white 
             placeholder-[#4b4b4b] bg-transparent autofill:bg-transparent"                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  className="w-full p-2 border border-[#4b4b4b] text-[13px] rounded-lg shadow-sm 
             focus:ring-primary focus:border-primary text-white dark:text-white 
             placeholder-[#4b4b4b] bg-transparent autofill:bg-transparent"                  placeholder="Enter subject"
                />
              </div>

              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full p-2 border border-[#4b4b4b] text-[13px] rounded-lg shadow-sm 
             focus:ring-primary focus:border-primary text-white dark:text-white 
             placeholder-[#4b4b4b] bg-transparent autofill:bg-transparent"                  placeholder="Type your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={sendMail}
                className="w-full p-2 border border-[#4b4b4b] text-[13px] rounded-lg shadow-sm 
             focus:ring-primary focus:border-primary text-white dark:text-white 
             placeholder-[#4b4b4b] bg-transparent autofill:bg-transparent"                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            <div className="w-full flex justify-center"><h1 className='text-white mt-2'>or</h1></div>
            <a href="https://wa.me/7756808374" className='flex justify-center'>
              <button className="w-full max-w-[50%] bg-primary text-[14px] text-white mt-2 p-2 bg-transparent rounded-lg shadow-md border-1 border-[#4b4b4b] hover:bg-primary/90 transition flex justify-center items-center gap-2">
                <SiWhatsapp />Connect on WhatsApp
              </button>
            </a>

            {/* Footer */}
            <div className="w-full px-6 py-6 lg:py-3 mt-8 lg:mt-[68px] flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 shadow-lg">
              <span className="text-white font-thin">Made by Rushi ❤️</span>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/rushikesh-parekar/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition duration-300" />
                </a>
                <a href="https://github.com/Rushi-Parekar11" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white text-2xl hover:text-gray-400 transition duration-300" />
                </a>
                <a href="https://www.instagram.com/r_ushi_16?igsh=b3FxeW9xYjRsenN0" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white text-2xl hover:text-gray-400 transition duration-300" />
                </a>
                <a href="https://x.com/Rushikeshp62166" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white text-2xl hover:text-gray-400 transition duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App