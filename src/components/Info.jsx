import React from 'react'
import {AiOutlineMail} from "react-icons/ai"
import {SiLinkedin} from "react-icons/si"
import image from '../assets/me.jpg'

const Info = () => {
  return (
    <div className="w-full">
        <a href="#">
            <img className="w-full rounded-t-lg" src={image} alt="" />
        </a>
        <div className="flex flex-col mt-4 items-center pb-10">
          
          <h5 className="mb-1 text-2xl font-bold dark:text-white">Moses Karani</h5>
          <span className="text-sm font-normal text-orange-400">Fullstack Developer</span>
          <div className="flex mt-4 space-x-8 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 gap-x-2 text-sm font-medium text-center text-gray-900 bg-white border border-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-gray-200 ">
              <AiOutlineMail />
              Email
            </a>
            <a href="#" className="inline-flex items-center px-4 py-2 gap-x-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <SiLinkedin />
              LinkedIn
            </a>
              
          </div>
      </div>
    </div>

    
  )
}

export default Info
