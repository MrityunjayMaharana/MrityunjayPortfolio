import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12 px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          {/* Left Section - Branding */}
          <div className='text-center md:text-left'>
            <h2 className='text-2xl font-bold text-green-500 mb-2'>Mrityunjay Maharana</h2>
            <p className='text-gray-400'>Full Stack Developer & Designer</p>
          </div>

          {/* Middle Section - Navigation */}
          <nav className='flex flex-wrap justify-center gap-6'>
            <a href="#about_section" className='text-gray-300 hover:text-green-500 transition'>About</a>
            <a href="#skills_section" className='text-gray-300 hover:text-green-500 transition'>Skills</a>
            <a href="#projects_section" className='text-gray-300 hover:text-green-500 transition'>Projects</a>
            <a href="#certification_section" className='text-gray-300 hover:text-green-500 transition'>Certifications</a>
            <a href="#contact_section" className='text-gray-300 hover:text-green-500 transition'>Contact</a>
          </nav>

          {/* Right Section - Social Links */}
          <div className='flex gap-6 text-2xl'>
            <a 
              href="https://github.com/MrityunjayMaharana" 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-gray-300 hover:text-green-500 transition'
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/mrityunjay-maharana/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-gray-300 hover:text-green-500 transition'
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://x.com/Mrityunjay1608?s=09" 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-gray-300 hover:text-green-500 transition'
              aria-label="Twitter/X"
            >
              <RiTwitterXLine />
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className='border-t border-gray-800 mt-10 pt-8 text-center text-gray-500'>
          <p>© {new Date().getFullYear()} Mrityunjay Maharana. All rights reserved.</p>
          <p className='mt-2 text-sm'>Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;