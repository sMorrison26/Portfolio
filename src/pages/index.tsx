import Layout from '@/components/layout/layout.component'
import Image from 'next/image'
import headshot from '@/images/headshot_2.webp'
import { useState, useEffect, type ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import onAHill from '@/images/onAHill.webp'


const Home: NextPageWithLayout = () => {

  // Current position for experience_data array
  const [pos, setPos] = useState<number>(0);
  const [experienceData, setExperienceData] = useState([]);

  //get experience data
  useEffect(() => {
    async function fetchExperienceData() {
      try {
        const encodedFilename = btoa('experience.json');
        const response = await fetch(`api/getJson?f=${encodedFilename}`);
        const data = await response.json();
        setExperienceData(data);
      } catch {
        console.error("Error loading experience data.");
      }
    };
    fetchExperienceData();
  }, []);

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

      {/* Third Section - Experience */}
      <section className='snap-start h-screen w-full flex items-center justify-center'>
        <div className='flex flex-col w-full h-full mx-auto sm:w-3/4 md:w-4/5 px-4 pt-4'>
          <p className='text-2xl md:text-3xl font-light text-white mt-12 md:mt-36 mb-4'>Employment Experience</p>
          {/* begin listing sections */}
          <div className='flex flex-col justify-around h-full relative overflow-hidden'>
            <div className='basis-2/4  transition-transform duration-500' style={{ transform: `translateX(-${pos * 100}%)` }}>
              {experienceData.map((experience, index) => (
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
            <div className='flex basis-1/4 justify-between items-center w-1/2 mx-auto mt-8'>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={`text-xl md:text-2xl ${pos === 0 ? 'text-transparent' : 'text-white/70 cursor-pointer hover:text-white'}`}
                onClick={() => (pos !== 0 ? setPos(pos - 1) : {})}
              />
              <p className='text-sm md:text-medium font-light'>{pos + 1} / {experienceData.length}</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`text-xl md:text-2xl ${pos === experienceData.length - 1 ? 'text-transparent' : 'text-white/70 cursor-pointer hover:text-white'}`}
                onClick={() => (pos !== experienceData.length - 1 ? setPos(pos + 1) : {})}
              />
            </div>
            {/* Chevron */}
            <div className="flex basis-1/4 justify-center items-center md:mb-4">
              <FontAwesomeIcon icon={faChevronDown} className="text-2xl md:text-4xl animate-bounce" />
            </div>
          </div>
        </div>
        
      </section>

      {/* Fourth Section - Skills  */}
      <section className='snap-start h-screen w-full flex items-center justify-center'>
        <div className='flex flex-col w-full h-full mx-auto sm:w-3/4 md:w-4/5 px-4 pt-4'>
        </div>
      </section>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
