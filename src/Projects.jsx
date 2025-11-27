import React, { useEffect, useState } from 'react'
//import courseBnB from './assets/courseBnB.png'
import { FaGithub } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";


function Projects() {
    const [blur, setBlur] = useState(true);

    var data = [
        {
            Project: "course bnb (UI Design)",
            Des: "The task is to build a fully responsive course viewer app that renders multi-level course content from JSON, with search, breadcrumbs, Tailwind UI, and a minimal admin panel.",
            gitLink: "https://github.com/Rushi-Parekar11/Airbnb",
            liveLink: "https://airbnb-seven-delta.vercel.app/",
            image: "/assets/courseBnB.png"
        },
        {
            Project: "Stock Portfolio Tracker Component for Prysm finance",
            Des: "Build a small, polished frontend app that Accepts a CSV of stock trades Shows a portfolio summary, holdings table, and interactive charts ,Provides filters , search, sorting, and pagination",
            gitLink: "https://github.com/Rushi-Parekar11/prysm",
            liveLink: "https://prysm-eight.vercel.app/",
            image: "/assets/prysm.png"
        },
        {
            Project: "Sanskar Vidyalaya (UI Design)",
            Des: "A modern UI design for Sanskar Vidhyalay School featuring a clean layout and visually rich photo sections. The design includes a cover banner and multiple themed images to highlight school activities and environment.",
            gitLink: "https://github.com/Rushi-Parekar11/SANSKAR-VIDYALAYA",
            liveLink: "https://rushi-parekar11.github.io/SANSKAR-VIDYALAYA/",
            image: "/assets/sanskar.png"
        },
        {
            Project: "PassFORG",
            Des: "PassFORG is a secure password generator that creates strong, complex passwords using uppercase letters, lowercase letters, numbers, and special characters. It helps users quickly generate safe and reliable passwords for any use.",
            gitLink: "https://github.com/Rushi-Parekar11/PassFORG",
            liveLink: "https://pass-forg.vercel.app/",
            image: "/assets/passforg.png"
        },
        {
            Project: "TextCounter",
            Des: "A React-based Text Counter app that provides live word/character counting with an instant preview. Includes text transformation features like uppercase, lowercase, copy, and clear.",
            gitLink: "https://github.com/Rushi-Parekar11/ReactTextCounter",
            liveLink: "https://rushi-parekar11.github.io/ReactTextCounter/",
            image: "/assets/textcounter.png"
        },
        {
            Project: "Todo List",
            Des: "A simple and responsive To-Do List application built with React, allowing users to add, delete, and manage daily tasks.",
            gitLink: "https://github.com/Rushi-Parekar11/React-TodoList",
            liveLink: "https://rushi-parekar11.github.io/React-TodoList/",
            image: "/assets/todo.png"
        }

    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setBlur(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className='min-h-screen w-full bg-[#18181b] flex justify-center'>
            <div className={`w-full bg-[#18181b] flex justify-center transition-all duration-1000 ${blur ? "blur-md" : "blur-0"}`}>
                <div className="w-full lg:w-[46%] px-4 lg:px-0 py-6 lg:py-0  text-white">
                    <div className='flex align-center mt-6 mb-10'>
                        <div className='h-9 w-2 bg-red-800'></div><h1 className='text-white text-[18px] font-medium mb-3 mt-1 ml-1'>Project & Work</h1>
                    </div>

                    <div className='flex flex-wrap justify-between mb-10'>


                        {data.map((data, index) => (
                            <div key={index} className='border border-[#4b4b4b] h-73 w-84 rounded-lg mt-8 bg-[#252525]'>
                                <div className='m-2 flex gap-1'>
                                    <div className="h-2 w-2 bg-[#fe6056] rounded-xl"></div>
                                    <div className="h-2 w-2 bg-[#f0bb42] rounded-xl"></div>
                                    <div className="h-2 w-2 bg-[#5eff00] rounded-xl"></div>
                                </div>
                                <hr className='text-[#4b4b4b]' />
                                <img src={data.image} alt="img" className=' w-full h-32 w-80 ' />
                                <div className='flex items-center justify-between mx-2 mt-2'>
                                    <h4 className="text-white text-[15px]">{data.Project}</h4>
                                    <div className='flex gap-2'>
                                        <a href={data.gitLink} target="_blank" ><FaGithub className="h-5 w-5 hover:text-blue-400" /></a>
                                        <a href={data.liveLink} target="_blank" ><IoEarth className="h-5 w-5 hover:text-blue-400" /></a>
                                    </div>
                                </div>
                                <p className="text-[#a3a3a3] font-medium text-[12px] p-2 ">{data.Des}</p>
                            </div>
                        ))}




                    </div>



                </div>
            </div>
        </div>


    )
}

export default Projects
