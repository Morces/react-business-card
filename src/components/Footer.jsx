import React from 'react'
import {BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='bg-[#161619] rounded-lg p-6 text-3xl grid grid-cols-4 gap-4'>
      <div className="bg-[#918E9B] p-2 m-auto border  rounded-md">
         <BsTwitter />
      </div>
      <div className="bg-[#918E9B] p-2 m-auto border rounded-md">
         <GrFacebook />
      </div>
      <div className="bg-[#918E9B] p-2 m-auto border rounded-md">
         <BsInstagram />
      </div>
      <div className="bg-[#918E9B] p-2 m-auto border rounded-md">
         <BsGithub />
      </div>
      
    </div>
  )
}

export default Footer;