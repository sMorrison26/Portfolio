import Layout from '@/components/layout/layout.component'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const About: NextPageWithLayout = () => {
  return (
    <div className="max-w-screen-xl flex flex-col p-4 h-full mx-auto w-full mt-32">
      {/* <div id='pitch' className='flex flex-col md:flex-row min-h-[85vh] sm:w-3/4 md:w-4/5 mx-auto'>
        <figure className='basis-1/5 mb-4 md:mr-4 md:mb-0'>
          <Image src={onAHill} className='max-h-[20vh] md:min-h-[60vh] object-cover rounded-3xl shadow-2xl shadow-theme-1' alt='More Pictures of Sean' />
        </figure>
        <div className='basis-4/5 font-light'>
          <p className='text-2xl sm:text-3xl md:text-4xl mb-4'>Meet Sean.</p>
          <p className='text-white/60'>Experienced web developer with a passion for cybersecurity.</p>
          <p className='text-white/60'>At the heart of my work is the belief in making a tangible difference. I don&apos;t just strive for change; I live by it. As a student of RPI, I continue to hone my skills and embrace the ethos of innovation and societal impact. Whether it&apos;s building secure web applications or implementing robust cybersecurity measures, I am driven by the goal of creating a safer digital landscape.</p>
        </div>
      </div>
      <div id='certs' className=''>

      </div>  
      <div id='resume' className=''>
      </div> */}
    </div>

  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="About Sean">{page}</Layout>;
};
export default About;
