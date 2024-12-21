import React from 'react'

const Page = () => {
  return (
    <div className='h-full px-7 py-4'>
        <h1 className='text-3xl font-bold pb-4'>Experience</h1>
        <hr className='mb-8' />
        <div className='pl-3 dark:bg-red-300'>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
              <li className="mb-10 ms-6">            
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </span>
                  <h3 className="flex justify-between items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    <a href='https://www.hdfclife.com/' target='_blank' className='hover:text-violet-600'>
                      HDFC Life Insurance, Banglore <i className="fa-solid text-sm fa-arrow-up-right-from-square"></i>
                    </a>
                    <time>
                      <span className='text-sm'>2024</span> - 
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                        Present
                      </span>
                    </time>
                  </h3>
                  <div className="block mb-2 text-md leading-none italic text-gray-700 font-semibold dark:text-gray-500">
                    Software Development Engineer - Frontend
                  </div>
                  <ul className="mb-4 text-base font-normal list-disc ml-4 text-gray-500 dark:text-gray-400">
                    <li>
                      Designed and implemented face detection with eye blink detection in frontend, followed by real-time video recording.
                      This feature reduced the liveliness verification failure rate from 33% to under 1%
                    </li>
                    <li>
                      Lead the frontend system design architecture, optimizing scalability and performance across projects and enhancing reliability and user experience.
                    </li>
                    <li>
                      AI Platform Dashboard: Developed a dashboard with advanced features:
                      <ul>
                        <li>PDF upload and automatic summary generation</li>
                        <li>Interactive question-answering from uploaded PDFs</li>
                        <li>Audio upload with accurate transcription capabilities, etc.</li>
                      </ul>
                    </li>
                    <li>
                      Data-Driven Dashboards: Worked on multiple dashboards, 
                      delivering insightful and user-friendly interfaces for data analysis and management.
                    </li>
                  </ul>
                  <div className='text-gray-600'><span className='font-bold'>Skills:</span> ReactJS, Angular, Redux.js, NodeJS, AWS, Bootstrap, TailwindCSS, Ant Design</div>
                  
              </li>

              {/* ============= */}

              <li className="mb-10 ms-6">            
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </span>
                  <h3 className="flex justify-between items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    <a href='https://www.parallelreality.co.uk/' target='_blank'  className='hover:text-violet-600'>
                      Parallel Reality, UK (Remote) <i className="fa-solid text-sm fa-arrow-up-right-from-square"></i>
                    </a>
                    <time>
                      <span className='text-sm'>MAR 2021 - DEC 2023</span> 
                      {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                        DEC 2023
                      </span> */}
                    </time>
                  </h3>
                  <div className="block mb-2 text-md leading-none italic text-gray-700 font-semibold dark:text-gray-500">
                    Software Development Engineer
                  </div>
                  <ul className="mb-4 text-base font-normal list-disc ml-4 text-gray-500 dark:text-gray-400">
                    <li>
                      Led the front-end development for the EMA project, a ground-breaking Electronic Medical Assistant platform
                      designed for NHS UK. 
                    </li>
                    <li>
                      Developed and maintained various components of the EMA system, including admin, representative, and doctor
                      dashboards and developed and integrated RESTful APIs for seamless data handling and communication.
                    </li>
                  </ul>
                  <div className='text-gray-600'><span className='font-bold'>Skills:</span> ReactJS, Angular, NextJS, Redux.js, AWS, NodeJS, Bootstrap, Accessibility, Web Performance</div>
                  
              </li>

              {/* ============= */}

              <li className="mb-10 ms-6">            
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </span>
                  <h3 className="flex justify-between items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    <a href='https://simplyturn.com/' target='_blank'  className='hover:text-violet-600'>
                      SimplyTurn Technology, Hyderabad (Remote) <i className="fa-solid text-sm fa-arrow-up-right-from-square"></i>
                    </a>
                    <time>
                      <span className='text-sm'>SEP 2020 - DEC 2020</span>
                      {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                        DEC 2020
                      </span> */}
                    </time>
                  </h3>
                  <div className="block mb-2 text-md leading-none italic text-gray-700 font-semibold dark:text-gray-500">
                    Software Development Intern
                  </div>
                  <ul className="mb-4 text-base font-normal list-disc ml-4 text-gray-500 dark:text-gray-400">
                    <li>
                      Developed high-performance, reusable components for the HRMS dashboard, enhancing the user experience and
                      functionality. Collaborated with cross-functional teams to implement UI designs, ensuring project requirements.
                    </li>
                    <li>
                      Integrated RESTful APIs to enable seamless data flow and improve system performance.
                    </li>
                  </ul>
                  <div className='text-gray-600'><span className='font-bold'>Skills:</span> ReactJS, Angular, Bootstrap, TypeScript, Redux, GIT, Figma</div>
              </li>
              
          </ol>
        </div>
    </div>
  )
}

export default Page