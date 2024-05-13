import Layout from '../components/layout/layout.component'
import Image from 'next/image'
import headshot from '@/images/headshot.webp'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <div className="max-w-screen-xl flex flex-col justify-between p-4 h-full mx-auto sm:w-3/4 md:w-4/5">
      <div className="flex justify-between mt-24 h-full">
        <p className="text-6xl sm:text-7xl md:text-8xl bg-clip-text bg-gradient-to-r from-white to-theme-1 text-transparent font-bold">
          Hi, I&apos;m<br /> Sean.
        </p>
        <Image src={headshot} className='object-cover w-[20%] rounded-full shadow-2xl shadow-theme-1' alt='Sean headshot' />
      </div>
      <div className="italic self-center mt-24">
        <p className="text-justify">Passionate. Experienced. Driven.</p>
      </div>
    </div>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;