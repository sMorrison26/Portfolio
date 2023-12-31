import Layout from '@/components/layout/layout.component'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons'


const Contact: NextPageWithLayout = () => {
  return(
    <div className="max-w-screen-xl flex flex-col  p-4 h-full mx-auto w-full">
      <div className="text-xl sm:text-4xl mx-auto mb-4">
        <p>Let&apos;s make something great together!</p>
      </div>
      <div className=" sm:w-1/2 border border-purple-600 sm:mx-auto">
        <div className="flex justify-between w-1/2 mx-auto p-4">
          <FontAwesomeIcon className='' icon={faFaceAngry} />
          <FontAwesomeIcon className='' icon={faFaceAngry} />
        </div>
        <hr className='w-4/5 mx-auto'></hr>
        <div className='flex flex-col sm:flex-row sm:justify-between p-4 overflow-hidden'>
          <p><strong>Email: </strong><a className='hover:underline' href='mailto:morrisonsean123@gmail.com'>morrisonsean123@gmail.com</a></p>
          <p><strong>Mobile:&nbsp;</strong><a className='hover:underline' href='tel:4843190679'>(484) 319-0679</a></p>
        </div>
      </div>
    </div>
  );
};
Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Get in Contact!">{page}</Layout>;
}
export default Contact;