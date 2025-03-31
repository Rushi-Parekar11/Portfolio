import { useState,useEffect } from 'react'
import {  FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import { FaLinkedin, FaXTwitter, FaYoutube ,FaGoogleDrive ,FaReact ,FaNodeJs , FaJava, } from "react-icons/fa6";
import { IoLogoJavascript,IoEarth    } from "react-icons/io5";
import { SiExpress ,SiMongodb,SiTailwindcss,SiSass ,SiFramer,SiReact,SiWhatsapp   } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import pic from './assets/pic.jpeg'
import Project1 from './assets/project1.png'
import Project2 from './assets/project2.png'
import Project3 from './assets/project3.png'
import emailjs from '@emailjs/browser'; // Import EmailJS


function App() {
  const [loading,setloading]=useState(false);
  
  (function(){
    emailjs.init({
      publicKey: "hRXoKZKMGyCaLjyyE",
    });
  })();

  // Updated sendMail function
  function sendMail(event){
    setloading(true);
    event.preventDefault(); // Prevent form submission

    const parms = {
      name: document.getElementById("name").value,
      email : document.getElementById("email").value,
      subject : document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_o0ryjxg","template_d0wua58",parms)
      .then((response) => {
        setloading(false);
        alert("Email sent successfully!");
      }, (error) => {
        alert("Failed to send email. Please try again.");
      });
  }

  const [blur, setBlur] = useState(true);

  useEffect(() => {
    // Remove blur after 2 seconds
    const timer = setTimeout(() => {
      setBlur(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
  
    <>

     <div className='h-[242vh] w-full bg-[#18181b] flex justify-center'>
     <div className={`h-[132vh] shadow-none w-full bg-[#18181b]  flex justify-center transition-all duration-1000 ${
        blur ? "blur-md" : "blur-0"}`}>
       <div className=" w-[45%] h-full">
       

       <div className=" h-[19vh] mt-8 flex items-center">
       <img src={pic} alt="Ram Goel" className="w-27 h-27 rounded-full "/>
       <div className='ml-4 '>
        <h1 className='text-[#ffffff] text-2xl font-semibold mb-1'>Rushikesh Parekar</h1>
        <h5 className='text-[#a3a3a3] mb-1 '>Computer science & Engineering | Full Stack | Java </h5>
        <div className="h-[28px] text-white w-[130px] border-1 border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-2">
           <FaGoogleDrive className='h-[14px] w-[14px]'/>
          <h3 className='text-sm font-medium'>View Resume</h3>
        </div>
       </div>
       </div>


       <div className=" h-[25vh] mt-2">
        <h1 className='text-white text-[20px] font-medium'>About</h1>
        <div className="text-gray-300  mt-3">
        <p className="font-medium text-[15px]  text-[#a3a3a3]" style={{ lineHeight: '28px', wordSpacing: '0.4em' }}>I am a pre-final year B.Tech computer science student passionate about web development, with experience in the MERN stack and Java. I enjoy creating dynamic, user-friendly web applications and am eager to learn and grow :)</p>
        <p className="font-medium text-[15px] mt-4 text-[#a3a3a3]">
  You can find me on  
  <a href="https://www.linkedin.com/in/rushikesh-parekar/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-yellow-400"> LinkedIn</a>,  
  <a href="https://github.com/Rushi-Parekar11" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-yellow-400"> GitHub</a>, or  
  <a href="https://x.com/Rushikeshp62166" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-yellow-400"> twitter </a> 
  {/* <a href="https://youtube.com/@your-channel" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline"> YouTube</a>. */}
</p>
         </div>
       </div>


       <div className="h-[15vh] w-[100%] ">

        <div className='h-[5vh] w-[100%] flex-wrap  mt-2 flex gap-3'>
       <div className="h-[26px] min-w-[112px] text-[#a3a3a3] hover:text-white hover:border-white w-fit px-3 border-[1px] border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-3 cursor-pointer transition-all duration-300 transform ">
  <IoLogoJavascript className="h-[14px] w-[14px]" />
  <h3 className="text-sm font-medium">Javascript</h3>
   </div>


<div className="h-[26px] min-w-[112px] text-[#a3a3a3] hover:text-white hover:border-white w-fit px-3 border-[1px] border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-3 cursor-pointer transition-all duration-300 transform ">
  <FaJava className="h-[14px] w-[14px]" />
  <h3 className="text-sm font-medium">Java</h3>
</div>


<div className="h-[26px] min-w-[112px] text-[#a3a3a3] hover:text-white hover:border-white w-fit px-3 border-[1px] border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 transform ">
  <FaReact  className="h-[14px] w-[14px]" />
  <h3 className="text-sm font-medium">React.js</h3>
</div>

<div className="h-[26px] min-w-[112px] text-[#a3a3a3] hover:text-white hover:border-white w-fit px-3 border-[1px] border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 transform ">
  <SiExpress  className="h-[14px] w-[14px]" />
  <h3 className="text-sm font-medium">Express.js</h3>
</div>

<div className="h-[26px] min-w-[112px] text-[#a3a3a3] hover:text-white hover:border-white w-fit px-3 border-[1px] border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 transform ">
  <FaNodeJs  className="h-[14px] w-[14px]" />
  <h3 className="text-sm font-medium">Node.js</h3>
</div>
    
    <div className="h-[26px] min-w-[112px] text-[#a3a3a3] hover:text-white hover:border-white w-fit px-3 border-[1px] border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 transform ">
  <SiMongodb   className="h-[14px] w-[14px]" />
  <h3 className="text-sm font-medium">Mongodb </h3>
</div>
        </div>

        <div className='h-[5vh] w-[100%] flex-wrap flex gap-3 '>
<div className="h-[26px] min-w-[112px] text-[#a3a3a3] hover:text-white hover:border-white w-fit px-3 border-[1px] border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 transform ">
  <SiTailwindcss    className="h-[14px] w-[14px]" />
  <h3 className="text-sm font-medium"> Tailwind </h3>
</div>

<div className="h-[26px] min-w-[112px] text-[#a3a3a3] hover:text-white hover:border-white w-fit px-3 border-[1px] border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 transform ">
  <SiSass     className="h-[14px] w-[14px]" />
  <h3 className="text-sm font-medium"> Sass </h3>
</div>

<div className="h-[26px] min-w-[112px] text-[#a3a3a3] hover:text-white hover:border-white w-fit px-3 border-[1px] border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 transform ">
  <SiFramer      className="h-[14px] w-[14px]" />
  <h3 className="text-sm font-medium">Framer Motion </h3>
</div>

<div className="h-[26px] min-w-[112px] text-[#a3a3a3] hover:text-white hover:border-white w-fit px-3 border-[1px] border-[#4b4b4b] rounded-2xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 transform ">
  <FaGithub className="h-[14px] w-[14px]" />
  <h3 className="text-sm font-medium"> Github </h3>
</div>

        </div>

       </div>


      {/* ///project cards div */}
     <div className=" h-[70vh] ">
     <h1 className='text-white text-[20px] font-medium mb-3 mt-5'>Project & Work</h1>

              {/* card3 */}
    <div className="relative max-w-4xl w-full flex hover:border-2 hover:border-gray-300 rounded-lg overflow-hidden shadow-lg h-[20vh] mb-5 group">
  <div className="absolute left-0 h-full w-2/5 overflow-hidden transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
  <a href="https://github.com/Rushi-Parekar11/Project_Management_Web"><img src={Project3} alt="card-image" className="h-full w-full object-cover" /></a>  
  </div>

  <div className="flex flex-col justify-between w-full h-full px-2 py-4 transition-all duration-300 transform group-hover:ml-[40%]">
    <h4 className="text-white text-lg mt-[-13px]">
      DokJan
    </h4>

    <p className="text-sm text-[#a3a3a3] mt-[-25px] "> reactJS,Mongodb,ExpressJS,NodeJS,ChartJS</p>
    
    {/* Description */}
    <p className="text-[#a3a3a3] font-medium text-sm mt-[-19px]">
    Contributed to the development of WorthEat, a real-time mess management system for IT companies, enhancing meal planning, order management, and user interactions.    </p>

    {/* Links Section */}
    <div className="flex items-center gap-4 text-white  mb-[-9px]">
      <a  href="https://github.com/Rushi-Parekar11/Project_Management_Web" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"  >
      <div className="flex justify-center gap-1">
        <FaGithub className="h-5 w-5" /><p className='text-sm'>View Repo</p>
        </div>
      </a>
      
      <a href="https://www.wortheat.in" target="_blank" rel="noopener noreferrer"  className="hover:text-gray-400">
      <div className="flex justify-center gap-1">
        <IoEarth  className="h-5 w-5" /><p className='text-sm'>Hosted Link</p>
        </div>
      </a>
    </div>
  </div>
     </div>

         {/* card2 */}
         <div className="relative max-w-4xl w-full flex hover:border-2 hover:border-gray-300 rounded-lg overflow-hidden shadow-lg h-[20vh] mb-5 group">
  <div className="absolute left-0 h-full w-2/5 overflow-hidden transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
  <a href="https://cryptocraft-green.vercel.app/"><img src={Project2} alt="card-image" className="h-full w-full object-cover" /></a>
  </div>

  <div className="flex flex-col justify-between w-full h-full px-2 py-4 transition-all duration-300 transform group-hover:ml-[40%]">
    <h4 className="text-white text-lg mt-[-13px]">CryptoCraft</h4>
    <p className="text-sm text-[#a3a3a3] mt-[-10px] "> reactJS,Mongodb,ExpressJS,NodeJS,ChartJS,APIs,JWT, bcrypt</p>
    {/* Description */}
    <p className="text-[#a3a3a3] font-medium text-sm mt-[-6px]">
    A crypto learning platform where users canbuy coins at real-time prices, and track profits/losses. It provides real-time market insights and interactive charts for better decision-making.
    </p>
    {/* Links Section */}
    <div className="flex items-center gap-4 text-white  mb-[-9px]">
      <a  href="https://github.com/Rushi-Parekar11/Cryptocraft" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"  >
      <div className="flex justify-center gap-1">
          <FaGithub className="h-5 w-5" /><p className='text-sm'>View Repo</p>
      </div>
      </a>
      
      <a href="https://cryptocraft-green.vercel.app/" target="_blank" rel="noopener noreferrer"  className="hover:text-gray-400">
      <div className="flex justify-center gap-1">
        <IoEarth  className="h-5 w-5" /><p className='text-sm'>Hosted Link</p>
        </div>

      </a>
    </div>
  </div>
     </div>

    
      {/* card1 */}
     <div className="relative max-w-4xl w-full flex hover:border-2 hover:border-gray-300 rounded-lg overflow-hidden shadow-lg h-[20vh] group">
  <div className="absolute left-0 h-full w-2/5 overflow-hidden transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
    <a href="https://www.wortheat.in"><img src={Project1} alt="card-image" className="h-full w-full object-cover" /></a>
  </div>

  <div className="flex flex-col justify-between w-full h-full px-2 py-4 transition-all duration-300 transform group-hover:ml-[40%]">
    <h4 className="text-white text-lg mt-[-13px]">
      WorthEat
    </h4>
    <p className="text-sm text-[#a3a3a3] mt-[-16px] "> ExpressJS,Mongodb,ExpressJS,NodeJS,JWT, bcrypt</p>

    
    {/* Description */}
    <p className="text-[#a3a3a3] font-medium text-sm mt-[-10px]">
    Contributed to the development of WorthEat, a real-time mess management system for IT companies, enhancing meal planning, order management, and user interactions.    </p>

    {/* Links Section */}
    <div className="flex items-center gap-4 text-white  mb-[-9px]">
      <a  href="https://github.com/Lunch-Booking-System/LunchBookingSystem" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"  >
      <div className="flex justify-center gap-1">
      <FaGithub className="h-5 w-5" /><p className='text-sm'>View Repo</p>
      </div>
      </a>
      
      <a href="https://www.wortheat.in" target="_blank" rel="noopener noreferrer"  className="hover:text-gray-400">
      <div className="flex justify-center gap-1">
        <IoEarth  className="h-5 w-5" /><p className='text-sm'>Hosted Link</p>
        </div>
      </a>
    </div>
  </div>
     </div>



     </div>

<hr className='text-[#4b4b4b] mt-4'/>
    {/* contact */}
    <div className="flex w-full justify-center text-white mt-8"> <h1 className='text-white text-[20px] font-medium'>Contact</h1></div>
    <form className="max-w-sm mx-auto p-6 bg-[#18181b]  rounded-2xl ">
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
    <input
      id="name"
      type="text"
      name="name"
      required
      className="mt-1 block w-full p-2 border-1 border-[#4b4b4b]  rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-200"
      placeholder="Enter your name"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      required
      className="mt-1 block w-full p-2 border-1 border-[#4b4b4b]  rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-300"
      placeholder="Enter your email"
    />
  </div>

  <div>
    <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
    <input
      id="subject"
      type="text"
      name="subject"
      required
      className="mt-1 block w-full p-2 border-1 border-[#4b4b4b] rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-300"
      placeholder="Enter subject"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      required
      className="mt-1 block w-full p-2 border-1 border-[#4b4b4b] rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-300"
      placeholder="Type your message..."
    ></textarea>
  </div>

  <button type="submit" onClick={sendMail} className="w-full bg-primary text-white mt-2 p-2 bg-transparent rounded-lg shadow-md border-1 border-[#4b4b4b] hover:bg-primary/90 transition">
  {loading ? "Sending..." : "Send Message"}  </button>
</form>
<div className="w-full flex justify-center"><h1 className='text-white'>or</h1></div>
  <a href="https://wa.me/7756808374" className='flex justify-center'> <button className="w-[50%] bg-primary text-white mt-2 p-2 bg-transparent rounded-lg shadow-md border-1 border-[#4b4b4b] hover:bg-primary/90 transition flex justify-center items-center gap-2">
  <SiWhatsapp/>Connect on WhatsApp
    </button></a>


    {/* navbar */}
    <div className="w-full px-6 py-3 mt-[68px] flex items-center justify-between space-x-4 shadow-lg">
      <span className="text-white font-thin">Designed & Developed by Rushi ❤️</span>
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
</div>
    </>
  )
}

export default App
