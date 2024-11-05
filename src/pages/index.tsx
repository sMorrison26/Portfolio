import Layout from '../components/layout/layout.component'
import Image from 'next/image'
import headshot from '@/images/headshot_2.webp'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

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
        <h1 className="text-white text-3xl">Second Container</h1>
      </section>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
