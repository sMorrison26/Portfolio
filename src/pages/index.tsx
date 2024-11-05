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
        <div className="max-w-screen-xl flex flex-col justify-around p-4 h-full mx-auto sm:w-3/4 md:w-4/5">
          <div className="flex justify-around items-center mt-24 h-1/2">
            <p className="text-6xl sm:text-7xl md:text-8xl bg-clip-text bg-gradient-to-r from-white to-theme-1 text-transparent font-bold">
              Hi, I&apos;m<br /> Sean.
            </p>
            <Image
              src={headshot}
              className="object-cover w-[20%] rounded-md shadow-2xl shadow-theme-1 h-3/4"
              alt="Sean headshot"
            />
          </div>
          <div className="italic self-center">
            <p className="text-justify">Passionate. Experienced. Driven.</p>
          </div>
          <div className='flex justify-center items-center'>
            <FontAwesomeIcon icon={faChevronDown} className='text-4xl animate-bounce' />
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className="snap-start h-screen w-full flex items-center justify-center">
        <div id='pitch' className='flex flex-col md:flex-row min-h-[85vh] sm:w-3/4 md:w-4/5 mx-auto mt-36'>
          <figure className='basis-1/5 mb-4 md:mr-4 md:mb-0'>
            <Image src={onAHill} className='max-h-[20vh] md:min-h-[60vh] object-cover rounded-3xl shadow-2xl shadow-theme-1' alt='More Pictures of Sean' />
          </figure>
          <div className='basis-4/5 font-light'>
            <p className='text-2xl sm:text-3xl md:text-4xl mb-4'>Meet Sean.</p>
            <p className='text-white/50'>Experienced web developer with a passion for cybersecurity.</p>
            <p className='text-white/50'>At the heart of my work is the belief in making a tangible difference. I don&apos;t just strive for change; I live by it. As a student of RPI, I continue to hone my skills and embrace the ethos of innovation and societal impact. Whether it&apos;s building secure web applications or implementing robust cybersecurity measures, I am driven by the goal of creating a safer digital landscape.</p>
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
