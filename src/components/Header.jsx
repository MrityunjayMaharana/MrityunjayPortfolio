import React from 'react';

function Header() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className='w-full bg-white py-6 px-10 shadow-sm fixed z-100 top-0'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        {/* Name/Logo */}
        <div className='text-2xl font-bold text-green-700 mb-4 md:mb-0'>
          <h1>Mrityunjay Maharana</h1>
        </div>
        
        {/* Navigation */}
        <nav>
          <ul className='flex flex-wrap justify-center gap-4 md:gap-8'>
            {[
              { id: 'about_section', label: 'About' },
              { id: 'skills_section', label: 'Skills' },
              { id: 'projects_section', label: 'Projects' },
              { id: 'experience_section', label: 'Experience' },
              { id: 'resume_section', label: 'Resume' },
              { id: 'certification_section', label: 'Certifications' },
              { id: 'contact_section', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => handleScroll(e, item.id)}
                  className='text-gray-700 hover:text-green-700 transition-colors font-medium'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;