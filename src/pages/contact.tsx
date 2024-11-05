import Layout from '@/components/layout/layout.component'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Contact: NextPageWithLayout = () => {
  return(
    <div className="max-w-screen-xl flex flex-col p-4 h-full mx-auto w-full mt-32">
      <div className="text-2xl sm:text-3xl md:text-4xl mx-auto mb-4 text-center sm:text-left">
        <p>Let&apos;s make something great together!</p>
      </div>
      <div className="md:text-xl sm:w-3/4 md:w-4/5 lg:w-1/2 border border-purple-600 sm:mx-auto">
        <div className="flex justify-between w-1/2 mx-auto p-4 text-xl sm:text-2xl md:text-3xl ">
          <a className='hover:text-purple-400' href='https://www.linkedin.com/in/sean-morrison-2a7201217/' aria-label='See my LinkedIn profile'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className='hover:text-purple-400' href='https://github.com/sMorrison26/' aria-label='See my GitHub profile'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <hr className='w-4/5 mx-auto'></hr>
        <div className='flex flex-col md:flex-row md:justify-between overflow-hidden w-4/5 mx-auto my-4'>
          <p><strong>Email: </strong><a className='hover:underline text-white/50' href='mailto:morrisonsean123@gmail.com'><br />morrisonsean123@gmail.com</a></p>
          <p><strong>Mobile: </strong><a className='hover:underline text-white/50' href='tel:4843190679'><br />(484) 319-0679</a></p>
        </div>
      </div>
    </div>
  );
};
Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Get in Contact!">{page}</Layout>;
}
export default Contact;