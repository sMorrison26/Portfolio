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
      <section className="snap-start h-screen w-full flex items-center justify-center">
        <div id='pitch' className='md:flex p-4 h-full mx-auto sm:w-3/4 md:w-4/5'>
          <figure className='basis-1/5 mb-4 md:mr-4 md:mb-0 md:h-1/2 mt-12 md:mt-36'>
            <Image src={onAHill} className='max-h-[20vh] md:min-h-[60vh] object-cover rounded-md shadow-2xl shadow-theme-1' alt='More Pictures of Sean' />
          </figure>
          <div className='basis-4/5 font-light mt-12 md:mt-36'>
            <p className='text-2xl sm:text-3xl md:text-4xl mb-4'>Meet Sean.</p>
            {/* <p className='text-white/50'>Experienced web developer with a passion for cybersecurity.</p> */}
            <p className='text-white/50'>
              Hi! My name is Sean, and I am a junior studying Information Technology & Web Science at RPI, with minors in both Management and Computer Science. I am passionate about everything IT, and over the course of my career, I&apos;ve fallen in love with building robust software—mainly in the form of web applications. My concentration is in the field of information security, giving me strong knowledge of what it takes to develop secure and reliable software. With two internship experiences, I have honed my skills in developing scalable solutions and have contributed to building processes that impact the software development life cycle.
            </p>
            <br />
            <p className='text-white/50'>
              Apart from my technical skills, I am someone who values strong culture. My involvement in several organizations across RPI&apos;s campus demonstrated my commitment to making a positive impact within the RPI community and my dedication to giving back to each community I join. As a member of the Sigma Chi fraternity, I have helped raise over four thousand dollars for cancer research through a series of volunteer and nonprofit events. Additionally, I have led several workshops aimed at enhancing and promoting group dynamics within other campus organizations, using hands-on exercises and group activities as part of the Leadership Educators Advising Peers (LEAP) program.
            </p>
          </div>
        </div>
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
