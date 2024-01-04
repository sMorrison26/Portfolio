import Layout from '@/components/layout/layout.component'
import onAHill from '@/images/onAHill.webp'
import Image from 'next/image'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const About: NextPageWithLayout = () => {
  return (
    <div className="max-w-screen-xl flex flex-col p-4 h-full mx-auto w-full">
      <div id='pitch' className='flex flex-col md:flex-row min-h-[85vh] sm:w-3/4 md:w-4/5 mx-auto'>
        <figure className='basis-1/5 mb-4 md:mr-4 md:mb-0'>
          <Image src={onAHill} className='max-h-[20vh] md:min-h-[60vh] object-cover rounded-3xl shadow-2xl shadow-theme-1' alt='More Pictures of Sean' />
        </figure>
        <div className='basis-4/5'>
          <p className='text-2xl sm:text-3xl md:text-4xl mb-4'>Meet Sean.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, sem id ultricies vestibulum, enim orci dictum erat, vel laoreet urna ante a mauris. Ut vulputate ex vel hendrerit tincidunt. Phasellus id tortor eleifend, fringilla purus nec, facilisis est. Integer consectetur tempor nunc, sit amet luctus orci condimentum at. In vitae viverra purus. Nam sollicitudin, risus vel pretium bibendum, lacus ipsum sodales diam, non ultrices odio turpis ut lacus. Nam pellentesque lectus venenatis ex faucibus, et facilisis turpis sollicitudin. Ut tincidunt lectus non posuere varius. Sed quis elit at orci iaculis scelerisque. Maecenas dictum tempor eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nisi augue, sodales ultricies gravida at, ullamcorper sed purus.</p>

        </div>
      </div>
      <div id='certs' className='bg-blue-700 h-screen'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, sem id ultricies vestibulum, enim orci dictum erat, vel laoreet urna ante a mauris. Ut vulputate ex vel hendrerit tincidunt. Phasellus id tortor eleifend, fringilla purus nec, facilisis est. Integer consectetur tempor nunc, sit amet luctus orci condimentum at. In vitae viverra purus. Nam sollicitudin, risus vel pretium bibendum, lacus ipsum sodales diam, non ultrices odio turpis ut lacus. Nam pellentesque lectus venenatis ex faucibus, et facilisis turpis sollicitudin. Ut tincidunt lectus non posuere varius. Sed quis elit at orci iaculis scelerisque. Maecenas dictum tempor eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nisi augue, sodales ultricies gravida at, ullamcorper sed purus.</p>

      </div>  
      <div id='resume' className='bg-red-700 h-screen'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, sem id ultricies vestibulum, enim orci dictum erat, vel laoreet urna ante a mauris. Ut vulputate ex vel hendrerit tincidunt. Phasellus id tortor eleifend, fringilla purus nec, facilisis est. Integer consectetur tempor nunc, sit amet luctus orci condimentum at. In vitae viverra purus. Nam sollicitudin, risus vel pretium bibendum, lacus ipsum sodales diam, non ultrices odio turpis ut lacus. Nam pellentesque lectus venenatis ex faucibus, et facilisis turpis sollicitudin. Ut tincidunt lectus non posuere varius. Sed quis elit at orci iaculis scelerisque. Maecenas dictum tempor eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nisi augue, sodales ultricies gravida at, ullamcorper sed purus.</p>

      </div>
    </div>
  
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="About Sean">{page}</Layout>;
};
export default About;
