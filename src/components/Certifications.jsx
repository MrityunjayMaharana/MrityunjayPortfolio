import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import c1 from '../assets/Certificates/c1.pdf';
import c2 from '../assets/Certificates/c2.pdf';
import c3 from '../assets/Certificates/c3.pdf';
import c4 from '../assets/Certificates/c4.pdf';
import c5 from '../assets/Certificates/c5.pdf';
import c6 from '../assets/Certificates/c6.pdf';
import c7 from '../assets/Certificates/c7.pdf';
import c8 from '../assets/Certificates/c8.pdf';
import c9 from '../assets/Certificates/c9.pdf';

function Certifications() {
  const certificates = [
    {
      id: 1,
      title: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University",
      date: "Completed March 2024",
      categories: ["Creativity", "Problem Solving", "Writing"],
      pdfFile: c5
    },
    {
      id: 2,
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI",
      date: "Completed April 2024",
      categories: ["Natural Language Processing", "Machine Learning", "Python Programming"],
      pdfFile: c9
    },
    {
      id: 3,
      title: "Dynamic Programming, Greedy Algorithms",
      issuer: "University of Colorado Boulder",
      date: "Completed April 2024",
      categories: ["Algorithms", "Computer Programming", "Problem Solving"],
      pdfFile: c1
    },
    {
      id: 4,
      title: "ChatGPT Advanced Data Analysis",
      issuer: "Vanderbilt University",
      date: "Completed May 2024",
      categories: ["Data Analysis", "Leadership and Management"],
      pdfFile: c4
    },
    {
      id: 5,
      title: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
      issuer: "Scrimba",
      date: "Completed May 2024",
      categories: ["Javascript", "Web Development", "Machine Learning"],
      pdfFile: c3
    },
    {
      id: 6,
      title: "Approximation Algorithms and Linear Programming",
      issuer: "University of Colorado Boulder",
      date: "Completed May 2024",
      categories: ["Algorithms", "Computer Programming"],
      pdfFile: c7
    },
    {
      id: 7,
      title: "ChatGPT for Beginners: Save time with Microsoft Excel",
      issuer: "Coursera Project Network",
      date: "Completed April 2024",
      categories: ["Data Analysis", "Microsoft Excel"],
      pdfFile: c2
    },
    {
      id: 8,
      title: "Learn to code with AI",
      issuer: "Scrimba",
      date: "Completed April 2024",
      categories: ["Javascript", "Machine Learning"],
      pdfFile: c6
    },
    {
      id: 9,
      title: "ChatGPT Playground for Beginners: Intro to NLP AI",
      issuer: "Coursera Project Network",
      date: "Completed May 2024",
      categories: ["Microsoft Excel"],
      pdfFile: c8
    }
  ];

  return (
    <div className='px-10 py-20 max-w-7xl mx-auto' id="certification_section">
      <div className='mb-16 text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>Certifications</h2>
        <div className='w-20 h-1 bg-green-600 mx-auto'></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {certificates.map((cert) => (
          <div key={cert.id} className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow'>
            {/* PDF Thumbnail */}
            <div className='h-48 bg-gray-100 flex flex-col items-center justify-center p-4'>
              <FaFilePdf className='text-red-500 text-6xl mb-4' />
              <p className='text-gray-600 text-center font-medium'>{cert.title}</p>
              <p className='text-gray-500 text-sm text-center'>{cert.issuer}</p>
            </div>
            
            {/* Certificate Content */}
            <div className='p-6'>
              <p className='text-gray-500 text-sm mb-4'>{cert.date}</p>
              
              {/* Categories */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {cert.categories.map((category, index) => (
                  <span key={index} className='bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs'>
                    {category}
                  </span>
                ))}
              </div>
              
              {/* Buttons */}
              <div className='flex gap-3'>
                <a 
                  href={cert.pdfFile}
                  download
                  className='flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-sm'
                >
                  <FaDownload /> Download
                </a>
                <a 
                  href={cert.pdfFile}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex-1 flex items-center justify-center gap-2 border border-gray-800 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm'
                >
                  <FaFilePdf /> Open PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;