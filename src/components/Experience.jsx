import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Summer Training",
      company: "CipherSchools",
      duration: "June 2024 - July 2024",
      description: [
        "Completed intensive training in MERN stack development",
        "Built a full-stack blogging application with user authentication",
        "Implemented RESTful APIs and rich text editing functionality",
        "Developed features for image uploads and content management"
      ],
      technologies: ["MERN Stack", "React", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 2,
      role: "Project Development",
      company: "Self-Learning",
      duration: "2023 - Present",
      description: [
        "Developed multiple full-stack applications independently",
        "Implemented various sorting algorithm visualizations",
        "Created ATS resume analysis tool using Python and GenAI",
        "Built project management platforms with JWT authentication"
      ],
      technologies: ["React", "Python", "JavaScript", "Tailwind CSS", "SQL"]
    }
  ];

  return (
    <div className='px-10 py-20 max-w-7xl mx-auto' id="experience_section">
      <div className='mb-16 text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>Experience & Training</h2>
        <div className='w-20 h-1 bg-green-600 mx-auto'></div>
      </div>

      <div className='space-y-12'>
        {experiences.map((exp) => (
          <div key={exp.id} className='bg-white p-8 rounded-xl shadow-md border border-gray-100'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-4'>
              <div className='md:w-1/3'>
                <h3 className='text-2xl font-bold text-green-700'>{exp.role}</h3>
                <p className='text-lg text-gray-600'>{exp.company}</p>
                <p className='text-gray-500'>{exp.duration}</p>
              </div>
              
              <div className='md:w-2/3'>
                <ul className='list-disc pl-5 space-y-2 mb-6'>
                  {exp.description.map((item, index) => (
                    <li key={index} className='text-gray-700'>{item}</li>
                  ))}
                </ul>
                
                <div className='flex flex-wrap gap-2'>
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;