import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 py-10 px-4'>
        <div className='flex flex-col text-center md:text-start gap-3 p-3'>
            <h1 className='text-[#00d387] text-3xl font-bold'>React.</h1>
            <p className='font-semibold text-lg py-2'>Esse id elit aliqua duis dolore qui adipisicing amet sunt amet anim aute incididunt proident.</p>
            <div className='flex gap-5 mx-auto md:mx-0 py-8'>
                <FaFacebookSquare className='text-white text-[25px] hover:text-[#00d387]'/>
                <FaInstagram className='text-white text-[25px] hover:text-[#00d387]'/>
                <FaTwitter className='text-white text-[25px] hover:text-[#00d387]'/>
                <FaGithub className='text-white text-[25px] hover:text-[#00d387]'/>
            </div>
        </div>
        <div className='grid grid-cols-3 md:col-span-2 text-center p-3 font-semibold'>
            <div className='flex flex-col gap-3 p-3'>
                <a href="" className='hover:text-[#00d387] text-gray-400'>Solutions</a>
                <a href="" className='hover:text-[#00d387]'>Analytics</a>
                <a href="" className='hover:text-[#00d387]'>Marketing</a>
                <a href="" className='hover:text-[#00d387]'>Commerce</a>
                <a href="" className='hover:text-[#00d387]'>Insights</a>
            </div>
            <div className='flex flex-col gap-3 p-3'>
                <a href="" className='hover:text-[#00d387] text-gray-400'>Support</a>
                <a href="" className='hover:text-[#00d387]'>Pricing</a>
                <a href="" className='hover:text-[#00d387]'>Docs</a>
                <a href="" className='hover:text-[#00d387]'>Guides</a>
                <a href="" className='hover:text-[#00d387]'>API Status</a>
            </div>
            <div className='flex flex-col gap-3 p-3'>
                <a href="" className='hover:text-[#00d387] text-gray-400'>Company</a>
                <a href="" className='hover:text-[#00d387]'>About</a>
                <a href="" className='hover:text-[#00d387]'>Blog</a>
                <a href="" className='hover:text-[#00d387]'>Jobs</a>
                <a href="" className='hover:text-[#00d387]'>Press</a>
                <a href="" className='hover:text-[#00d387]'>Partners</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
