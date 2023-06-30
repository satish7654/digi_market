import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-hara'>REACT.</h1>
            <p className='py-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit illo soluta ipsum repudiandae nihil voluptates maxime hic molestias consequatur</p>
            <div className='flex justify-between md:w-[75%] my-6 cursor-pointer'>
                <FaFacebookSquare className=' hover:text-white'  size={30} />
                <FaInstagram className=' hover:text-white' size={30} />
                <FaGithubSquare className=' hover:text-white' size={30} />
                <FaTwitterSquare className=' hover:text-white' size={30} />
                <FaDribbbleSquare className=' hover:text-white' size={30} />

            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solution</h6>
                <ul className='cursor-pointer'>
                    <li className='py-2 text-sm  hover:text-white'>Analytics</li>
                    <li className='py-2 text-sm  hover:text-white'>Marketing</li>
                    <li className='py-2 text-sm  hover:text-white'>Commerce</li>
                    <li className='py-2 text-sm  hover:text-white'>Insights</li>
                </ul>

            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul className='cursor-pointer' >
                    <li className='py-2 text-sm  hover:text-white'>Pricing</li>
                    <li className='py-2 text-sm  hover:text-white'>Documentation</li>
                    <li className='py-2 text-sm  hover:text-white'>Guides</li>
                    <li className='py-2 text-sm  hover:text-white'>API Status</li>
                </ul>

            </div>
            <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul className='cursor-pointer'>
            <li className='py-2 text-sm  hover:text-white'>Claim</li>
            <li className='py-2 text-sm  hover:text-white'>Policy</li>
            <li className='py-2 text-sm  hover:text-white'>Terms</li>
            <li className='py-2 text-sm  hover:text-white'>Careers</li>
        </ul>
    </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul className='cursor-pointer'>
                    <li className='py-2 text-sm  hover:text-white'>About</li>
                    <li className='py-2 text-sm  hover:text-white'>Blogs</li>
                    <li className='py-2 text-sm  hover:text-white'>Jobs</li>
                    <li className='py-2 text-sm  hover:text-white'>Press</li>
                   
                </ul>

            </div>
          
        </div>

    </div>
  )
}

export default Footer