import { useState, useEffect, type ReactElement, Key } from 'react'
import type { NextPageWithLayout } from './_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Layout from '@/components/layout/layout.component'
import SkillLogo from '@/components/skillLogo/skillLogo.component'
import Image from 'next/image'
import { Images } from '@/imports/index'

const Home: NextPageWithLayout = () => {

  // Current position for experience_data array
  const [pos, setPos] = useState<number>(0);
  const [experienceData, setExperienceData] = useState([]);
  const [certData, setCertData] = useState([]);

  //get experience data
  useEffect(() => {

    //function to get employment experience data
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

    //function to get licenses and cetification data 
    async function fetchCertData() {
      try {
        const encodedFilename = btoa('certifications.json');
        const response = await fetch(`api/getJson?f=${encodedFilename}`);
        const data = await response.json();
        setCertData(data);
      } catch {
        console.error("Error loading certifications data.");
      }
    };


    fetchExperienceData();
    fetchCertData();
  }, []);

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {/* First section - Intro */}
      <section className="snap-start h-screen w-full flex items-center justify-center">
        <div className="flex flex-col p-4 h-full mx-auto sm:w-3/4 md:w-4/5">
          <div className="flex justify-between items-center h-1/2 mt-10 md:mt-24">
            <p className="text-3xl sm:text-5xl md:text-8xl bg-clip-text bg-gradient-to-r from-white to-theme-1 text-transparent font-bold">
              Hi, I&apos;m<br /> Sean.
            </p>
            <Image
              src={Images.headshot}
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
            <figure className="basis-1/5 mb-2 sm:mb-4 md:mr-4 md:mb-0 mt-12 md:mt-32">
              <Image
                src={Images.onAHill}
                className="max-h-[20vh] md:min-h-[60vh] object-cover rounded-md shadow-xl shadow-theme-1"
                alt="More Pictures of Sean"
              />
            </figure>
            {/* Text Section */}
            <div className="flex flex-col basis-4/5 h-full font-light mt-4 sm:mt-8 md:mt-36 md:ml-8 md:max-h-[60vh]">
              <p className="text-2xl sm:text-3xl md:text-4xl mb-4">Meet Sean.</p>
              <div className="flex flex-col overflow-y-scroll px-4 py-2 border-x border-white/30 max-h-[40vh] md:max-h-full no-scrollbar">
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
          <p className='text-2xl md:text-3xl font-light text-white mt-12 md:mt-32 mb-4'>Employment Experience</p>
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
                        className="max-h-[20vh] max-w-[20vw] object-cover rounded-md shadow-sm shadow-theme-1"
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
                        <ul className="list-disc list-inside text-white/70">
                          {experience.summary.map((point: string, index: Key) => (
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
          <p className='text-2xl md:text-3xl font-light text-white mt-12 md:mt-32 mb-4'>Technical Skills</p>
          <p className='text-lg md:text-xl font-light text-white/70 mb-4'>Programming Languages</p>
          <div className='grid grid-cols-5 md:grid-cols-10 gap-4 mb-8'>
            <SkillLogo src={Images.pythonLogo} alt={'Python'} color='outline-yellow-500' />
            <SkillLogo src={Images.cLogo} alt={'C'} color='outline-blue-600' />
            <SkillLogo src={Images.cPlusPlusLogo} alt={'C++'} color='outline-blue-500' />
            <SkillLogo src={Images.cSharpLogo} alt={'C#'} color='outline-purple-500' />
            <SkillLogo src={Images.phpLogo} alt={'PHP'} color='outline-violet-500' />
            <SkillLogo src={Images.SQLlogo} alt={'SQL'} color='outline-red-500' />
            <SkillLogo src={Images.JavaScriptLogo} alt={'JavaScript'} color='outline-yellow-500' />
            <SkillLogo src={Images.TypeScriptLogo} alt={'TypeScript'} color='outline-blue-400' />
            <SkillLogo src={Images.JavaLogo} alt={'Java'} color='outline-red-500' />
            <SkillLogo src={Images.BashLogo} alt={'Bash'} color='outline-white ' />
          </div>
          <p className='text-lg md:text-xl font-light text-white/70 mb-4'>Web Development</p>
          <div className='grid grid-cols-5 md:grid-cols-10 gap-4 mb-8'>
            <SkillLogo src={Images.HTMLLogo} alt={'HTML'} color='outline-red-500 bg-white' />
            <SkillLogo src={Images.CSSLogo} alt={'CSS'} color='outline-blue-500 bg-white' />
            <SkillLogo src={Images.NodeJsLogo} alt={'NodeJs'} color='outline-green-500' />
            <SkillLogo src={Images.ReactJsLogo} alt={'ReactJs'} color='outline-blue-300' />
            <SkillLogo src={Images.NextJsLogo} alt={'NextJs'} color='outline-black bg-white' />
            <SkillLogo src={Images.DotNetLogo} alt={'DotNet'} color='outline-indigo-500' />
            <SkillLogo src={Images.TailwindLogo} alt={'TailwindCSS'} color='outline-blue-400' />
            <SkillLogo src={Images.AngularJsLogo} alt={'AngularJs'} color='outline-red-500' />
            <SkillLogo src={Images.BootstrapLogo} alt={'Bootstrap'} color='outline-purple-500' />
            <SkillLogo src={Images.ExpressLogo} alt={'Express'} color='outline-green-500 bg-white' />
          </div>
          <p className='text-lg md:text-xl font-light text-white/70 mb-4'>Tools</p>
          <div className='grid grid-cols-5 md:grid-cols-10 gap-4 mb-8'>
            <SkillLogo src={Images.GitLogo} alt={'Git'} color='outline-red-500' />
            <SkillLogo src={Images.LinuxLogo} alt={'Linux'} color='outline-yellow-500 bg-white' />
            <SkillLogo src={Images.AzureLogo} alt={'Azure'} color='outline-blue-500' />
            <SkillLogo src={Images.AWSLogo} alt={'AWS'} color='outline-yellow-500 bg-white' />
            <SkillLogo src={Images.MongoDB} alt={'MongoDB'} color='outline-green-500 bg-white' />
          </div>
          {/* Chevron */}
          <div className="flex basis-1/4 justify-center items-center md:mb-4">
            <FontAwesomeIcon icon={faChevronDown} className="text-2xl md:text-4xl animate-bounce" />
          </div>
        </div>
      </section>

      {/* Fifth Section - Licenses & Certifications */}
      <section className='snap-start h-screen w-full flex items-center justify-center'>
        <div className='flex flex-col w-full h-full mx-auto sm:w-3/4 md:w-4/5 px-4 pt-4'>
          <p className='text-2xl md:text-3xl font-light text-white mt-12 md:mt-32 mb-4'>Licenses & Certifcations</p>
          <div className='flex flex-col overflow-y-scroll px-4 py-2 border-x border-white/30 max-h-[40vh] md:max-h-[60vh] no-scrollbar'>
            {certData.map((cert, index: Key) => (
              <div key={index} className='flex justify-start items-center mb-4 md:mb-8'>
                <Image src={cert.credentialImage} alt={cert.issuer} width={100} height={100} className='max-h-[14vh] max-w-[14vw] md:max-h-[16vh] md:max-w-[16vw] object-cover rounded-md shadow-sm shadow-theme-1  mr-4' />
                <div className='font-light w-4/5'>
                  <a href={cert.credentialURL} target='_blank' className='text-medium md:text-xl hover:underline'>{cert.name}</a>
                  <p className='text-xs md:text-medium text-white/70'>{cert.issuer}</p>
                  <p className='text-xs md:text-medium text-white/70'>Issued {cert.issueDate}</p>
                </div>
              </div>

            ))}
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
