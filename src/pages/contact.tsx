import Layout from '@/components/layout/layout.component'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Contact: NextPageWithLayout = () => {
  return (
    <div className="max-w-screen-xl flex flex-col p-4 h-full mx-auto w-full mt-16 md:mt-32">
      <div className="text-lg md:text-2xl mt-8 mx-auto mb-4 text-center sm:text-left font-light">
        <p>Let&apos;s make something great together!</p>
      </div>
      <div className="md:text-xl sm:w-3/4 md:w-4/5 lg:w-1/2 border-x border-white/30 sm:mx-auto">
        <div className="flex justify-between items-center gap-4 w-4/5 mx-auto py-4 text-xl sm:text-2xl md:text-3xl text-white/70">
          <a className='hover:text-purple-400' href='https://www.linkedin.com/in/smorrison26/' aria-label='LinkedIn profile'>
            <FontAwesomeIcon icon={faLinkedin} className='' />
          </a>
          <a className='hover:text-purple-400' href='https://github.com/sMorrison26/' aria-label='GitHub profile'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className='hover:text-purple-400' href='mailto:morrisonsean123@gmail.com' aria-label='Email'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

      </div>
    </div>
  );
};
Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Get in Contact!">{page}</Layout>;
}
export default Contact;