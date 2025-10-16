import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// --- Reusable Option Card for the Modal ---
const ResumeOptionCard = ({ title, description, downloadLink, fileName, icon }) => (
  <a
    href={downloadLink}
    download={fileName}
    className="group relative flex flex-col items-center justify-center p-6 text-center bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-transparent hover:border-blue-500 hover:bg-white dark:hover:bg-gray-900 transition-all duration-300"
  >
    <div className="mb-4 text-blue-500">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
    <div className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-md opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
      Download
    </div>
  </a>
);

// --- The Modal Component ---
const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-2xl rounded-xl bg-white dark:bg-gray-900 p-8 shadow-2xl">
              <Dialog.Title as="h2" className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                Choose My Resume
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-center text-gray-600 dark:text-gray-400">
                Select the role that best fits your needs to download the tailored version of my resume.
              </Dialog.Description>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResumeOptionCard
                  title="Full Stack Developer"
                  description="Focuses on web technologies, application architecture, and my experience with React, Node.js, and Next.js."
                  downloadLink="/resumes/Sujeet_FullStack_Resume.pdf" // <-- IMPORTANT PATH
                  fileName="Sujeet_FullStack_Resume.pdf"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>}
                />
                <ResumeOptionCard
                  title="Data Analytics"
                  description="Highlights my skills in data processing, visualization, Python, SQL, and statistical analysis."
                  downloadLink="/resumes/Sujeet_DataAnalytics_Resume.pdf" // <-- IMPORTANT PATH
                  fileName="Sujeet_DataAnalytics_Resume.pdf"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A2.25 2.25 0 011.5 18.75v-5.625zM12 13.125C12 12.504 12.504 12 13.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C16.5 20.496 15.996 21 15.375 21h-2.25A2.25 2.25 0 0110.5 18.75v-5.625zM21 13.125C21 12.504 21.504 12 22.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C25.5 20.496 24.996 21 24.375 21h-2.25A2.25 2.25 0 0119.5 18.75v-5.625z" /></svg>}
                />
              </div>

              <div className="mt-8 text-center">
                  <button
                    onClick={onClose}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
                  >
                    Cancel
                  </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

// --- The Main Section to be placed on your page ---
const DownloadResumeSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className=" bg-white dark:bg-gray-950">
        <button
          onClick={() => setModalOpen(true)}
        // These classes can be adjusted if you need a smaller button for a navbar, etc.
          className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
        >
          Download Resume
        </button>

      {/* The Modal is rendered here but controlled by state */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default DownloadResumeSection;