import Layout from '@/components/layout/layout.component'
import Image from 'next/image'
import headshot from '@/images/headshot_2.webp'
import { useState, type ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import onAHill from '@/images/onAHill.webp'


const Home: NextPageWithLayout = () => {

  // Current position for experience_data array
  const [pos, setPos] = useState<number>(0);
  const experience_data = [
    {
      "title": "Development Operations Engineer Intern",
      "company": "Communications Test Design Inc.",
      "company_logo": "/assets/images/CTDI.webp",
      "date": "May 2024 - Aug 2024",
      "summary": [
        "Designed C# web application to streamline secret management across multiple cloud platforms including Octopus & AWS.",
        "Optimized F5 server-side software using C# to precisely diagnose and troubleshoot code deployment issues in production.",
        "Implemented dynamic key performance indicator script leveraging Python to drive data driven decision-making."
      ]
    }, {
      "title": "Website Designer",
      "company": "Rensselaer Polytechnic Institute",
      "company_logo": "/assets/images/rpilogo.webp",
      "date": "Dec 2023 - May 2024",
      "summary": [
        "Revamped the RPI Chemistry Department website to attract prospective students and boost enrollment.",
        "Researched UI statistics in web development to create an excellent and engaging website for RPI.",
      ]
    }, {
      "title": "Software Engineer Intern",
      "company": "Communications Test Design Inc.",
      "company_logo": "/assets/images/CTDI.webp",
      "date": "May 2023 - Aug 2023",
      "summary": [
        "Remodeled the front end of an internal search engine utility to drive engagement rates and standardize use across the company.",
        "Engineered and debugged backend of internal search engine utility with C# and AngularJS to assist in data migration processes.",
        "Formulated a sleek new visitor login system to be installed into kiosks at every CTDI location."
      ]
    }, {
      "title": "Team Leader",
      "company": "Chick-Fil-A",
      "company_logo": "/assets/images/chickfila.webp",
      "date": "Jun 2022 - Aug 2022",
      "summary": [
        "Led a team of 15+ members to achieve an average customer satisfaction score of 95%, exceeding company standards.",
        "Implemented a new training program for new hires, reducing onboarding time by 20% and improving overall team efficiency."
      ]
    }, {
      "title": "Trainer",
      "company": "Chick-Fil-A",
      "company_logo": "/assets/images/chickfila.webp",
      "date": "Jan 2022 - Jun 2022",
      "summary": [
        "Mentored new team members, resulting in a 25% faster adaptation period and higher initial performance scores.",
        "Collaborated with management to identify and address training needs, ensuring alignment with company goals and standards."
      ]
    }, {
      "title": "Team Member",
      "company": "Chick-Fil-A",
      "company_logo": "/assets/images/chickfila.webp",
      "date": "Apr 2021 - Jan 2022",
      "summary": [
        "Maintained perfect attendance and punctuality, demonstrating reliability and commitment to team success.",
        "Contributed to a clean and organized work environment, receiving commendations for adherence to sanitation and safety standards.",
        "Processed customer orders efficiently, reducing wait times by 10% during peak hours while ensuring order accuracy."
      ]
    }
  ]

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {/* First section - Intro */}
      <section className="snap-start h-screen w-full flex items-center justify-center">
        <div className="flex flex-col p-4 h-full mx-auto sm:w-3/4 md:w-4/5">
          <div className="flex justify-between items-center h-1/2 mt-10 md:mt-24">
            <p className="text-3xl sm:text-5xl md:text-8xl bg-clip-text bg-gradient-to-r from-white to-theme-1 text-transparent font-bold">
              Hi, I&apos;m<br /> Sean.
            </p>
            <Image
              src={headshot}
              className="object-cover w-1/2 md:w-1/5 rounded-md shadow-2xl shadow-theme-1 h-1/2 md:h-3/4"
              alt="Sean headshot"
            />
          </div>
          <div className="italic self-center mt-8">
            <p className="text-justify text-xs md:text-medium">Passionate. Experienced. Driven.</p>
          </div>
          <div className='flex justify-center items-center mt-20'>
            <FontAwesomeIcon icon={faChevronDown} className='text-2xl md:text-4xl animate-bounce' />
          </div>
        </div>
      </section>

      {/* Second section - Elevator */}
      <section className="snap-start h-screen w-full flex items-center justify-center">
        <div className="flex flex-col w-full h-full mx-auto sm:w-3/4 md:w-4/5 px-4 pt-4 pb-safe">
          <div id="pitch" className="flex flex-col md:flex-row">
            {/* Image Section */}
            <figure className="basis-1/5 mb-2 sm:mb-4 md:mr-4 md:mb-0 mt-12 md:mt-36">
              <Image
                src={onAHill}
                className="max-h-[20vh] md:min-h-[60vh] object-cover rounded-md shadow-xl shadow-theme-1"
                alt="More Pictures of Sean"
              />
            </figure>
            {/* Text Section */}
            <div className="flex flex-col basis-4/5 h-full font-light mt-4 sm:mt-8 md:mt-36 md:ml-8 md:max-h-[60vh]">
              <p className="text-2xl sm:text-3xl md:text-4xl mb-4">Meet Sean.</p>
              <div className="flex flex-col overflow-y-scroll px-4 py-2 border-x border-white/30 max-h-[40vh] md:max-h-full">
                <p className="text-xs md:text-medium text-white/60">
                  <span className='font-bold'>Hi!</span> My name is Sean, and I am a junior studying <span className='font-bold'>Information Technology & Web Science</span> at <span className='font-bold'>RPI</span>, with minors in both <span className='font-bold'>Management</span> and <span className='font-bold'>Computer Science</span>. I am passionate about everything IT, and over the course of my career, I&apos;ve fallen in love with building <span className='font-bold'>robust software</span>—mainly in the form of web applications. My concentration is in the field of <span className='font-bold'>information security</span>, giving me strong knowledge of what it takes to develop <span className='font-bold'>secure</span> and <span className='font-bold'>reliable</span> software. With two internship experiences, I have honed my skills in developing <span className='font-bold'>scalable</span> solutions and have contributed to building processes that impact the software development life cycle.
                </p>
                <br />
                <p className="text-xs md:text-medium text-white/60">
                  Apart from my technical skills, I am someone who values strong <span className='font-bold'>culture</span>. My involvement in several organizations across RPI&apos;s campus demonstrated my commitment to making a positive impact within the RPI community and my dedication to <span className='font-bold'>giving back</span> to each community I join. As a member of the <span className='font-bold'>Sigma Chi fraternity</span>, I have helped raise over four thousand dollars for cancer research through a series of <span className='font-bold'>volunteer</span> and nonprofit events. Additionally, I have <span className='font-bold'>led several workshops</span> aimed at enhancing and promoting group dynamics within other campus organizations, using hands-on exercises and group activities as part of the <span className='font-bold'>Leadership Educators Advising Peers (LEAP)</span> program.
                </p>
              </div>
            </div>
          </div>
          {/* Chevron */}
          <div className="flex justify-center items-center mt-8 md:mb-4 ">
            <FontAwesomeIcon icon={faChevronDown} className="text-2xl md:text-4xl animate-bounce" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className='snap-start h-screen w-full flex items-center justify-center'>
        <div className='flex flex-col w-full h-full mx-auto sm:w-3/4 md:w-4/5 px-4 pt-4'>
          <p className='text-2xl md:text-3xl font-light text-white mt-12 md:mt-36 mb-4'>Employment Experience</p>
          {/* begin listing sections */}
          <div className='flex flex-col justify-around h-full relative overflow-hidden'>
            <div className='basis-3/4 md:basis-1/2 transition-transform duration-500' style={{ transform: `translateX(-${pos * 100}%)` }}>
              {experience_data.map((experience, index) => (
                <div key={index} className='absolute w-full h-full top-0 left-0 flex transition-transform duration-500' style={{ transform: `translateX(${index * 100}%)` }}>
                  <div className='md:flex h-fit border-l-white/30 border-l pl-4'>
                    <figure className='md:basis-1/12 mb-4 md:mr-4'>
                      <Image
                        src={experience.company_logo}
                        width={100}
                        height={100}
                        className="max-h-[20vh] max-w-[20vw] md:max-h-[10vh] md:max-w-[10vw] object-cover rounded-md shadow-sm shadow-theme-1"
                        alt={experience.company}
                      />
                    </figure>
                    {/* Main Details */}
                    <div className='basis-11/12'>
                      <p className='text-lg md:text-2xl font-semibold'>{experience.title}</p>
                      <p className='text-xs md:text-medium font-light text-white/70'>{experience.date}</p>
                      <p className='text-sm md:text-lg my-2 sm:my-3'>{experience.company}</p>
                      {/* Summary */}
                      <div className='text-xs md:text-medium font-light mt-2'>
                        <ul className="list-disc list-inside">
                          {experience.summary.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Change section */}
            <div className='flex basis-1/4 md:basis-1/2 justify-between items-start w-1/2 mx-auto mt-4'>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={`text-xl md:text-2xl ${pos === 0 ? 'text-transparent' : 'text-white/70 cursor-pointer hover:text-white'}`}
                onClick={() => (pos !== 0 ? setPos(pos - 1) : {})}
              />
              <p className='text-sm md:text-medium font-light'>{pos + 1} / {experience_data.length}</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`text-xl md:text-2xl ${pos === experience_data.length - 1 ? 'text-transparent' : 'text-white/70 cursor-pointer hover:text-white'}`}
                onClick={() => (pos !== experience_data.length - 1 ? setPos(pos + 1) : {})}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
