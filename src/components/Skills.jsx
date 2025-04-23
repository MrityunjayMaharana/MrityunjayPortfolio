import React from 'react'

function Skills() {
  return (
    <div className='px-10 py-20 max-w-7xl mx-auto' id="skills_section">
      <div className='mb-16 text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>Technical Skills</h2>
        <div className='w-20 h-1 bg-green-600 mx-auto'></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Programming Languages */}
        <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100'>
          <h3 className='text-xl font-semibold text-green-700 mb-4 flex items-center'>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Programming Languages
          </h3>
          <div className='flex flex-wrap gap-3'>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>C++ (proficient)</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Java</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Python</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>JavaScript</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>PHP</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>HTML</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>CSS</span>
          </div>
        </div>

        {/* Frameworks */}
        <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100'>
          <h3 className='text-xl font-semibold text-green-700 mb-4 flex items-center'>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Frameworks & Databases
          </h3>
          <div className='flex flex-wrap gap-3'>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>React</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>MongoDB</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>PostgreSQL</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Node.js</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Express</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Laravel</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Tailwind</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Bootstrap</span>
          </div>
        </div>

        {/* Core Subjects */}
        <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100'>
          <h3 className='text-xl font-semibold text-green-700 mb-4 flex items-center'>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Core Subjects
          </h3>
          <div className='flex flex-wrap gap-3'>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Operating Systems</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Computer Networking</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>DBMS</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Automata Theory</span>
          </div>
        </div>

        {/* Version Control */}
        <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100'>
          <h3 className='text-xl font-semibold text-green-700 mb-4 flex items-center'>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
            Version Control
          </h3>
          <div className='flex flex-wrap gap-3'>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Git</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>GitHub</span>
          </div>
        </div>

        {/* Operating system */}
        <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100'>
          <h3 className='text-xl font-semibold text-green-700 mb-4 flex items-center'>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
            Operating Systems
          </h3>
          <div className='flex flex-wrap gap-3'>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Windows</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Linux</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>MAC OS</span>
          </div>
        </div>

        {/* Soft Skills */}
        <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100'>
          <h3 className='text-xl font-semibold text-green-700 mb-4 flex items-center'>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Soft Skills
          </h3>
          <div className='flex flex-wrap gap-3'>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Problem Solving</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Time Management</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Communication</span>
            <span className='bg-green-100 px-4 py-2 rounded-full text-gray-800'>Adaptability</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills