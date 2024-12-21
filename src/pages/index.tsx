import Layout from '../components/layout/layout.component'
import Image from 'next/image'
import headshot from '@/images/headshot_2.webp'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import onAHill from '@/images/onAHill.webp'


const Home: NextPageWithLayout = () => {


  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {/* First section with custom content */}
      <section className="snap-start h-screen w-full flex items-center justify-center">
        <div className="flex flex-col justify-around p-4 h-full mx-auto sm:w-3/4 md:w-4/5">
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
          <div className="italic self-center">
            <p className="text-justify text-xs md:text-medium">Passionate. Experienced. Driven.</p>
          </div>
          <div className='flex justify-center items-center'>
            <FontAwesomeIcon icon={faChevronDown} className='text-2xl md:text-4xl animate-bounce' />
          </div>
        </div>
      </section>



      {/* Second section */}
      <section className="snap-start h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="flex flex-col w-full h-full mx-auto sm:w-3/4 md:w-4/5 p-4">
          <div id="pitch" className="flex flex-col md:flex-row h-full">
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
              <div className="flex flex-col overflow-y-scroll px-4 py-2 border-x border-white/30 max-h-[50vh] md:max-h-full">
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
          <div className="flex justify-center items-center md:mt-8 md:mb-4 safe-bottom relative">
            <FontAwesomeIcon icon={faChevronDown} className="text-2xl md:text-4xl animate-bounce" />
          </div>
        </div>
      </section>



      {/* Third Section */}
      <section className='snap-start h-screen w-full flex items-center justify-center'>
        <div id='certs' className=''>
        </div>
        <div id='resume' className=''>
        </div>
      </section>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
