import Layout from '@/components/layout/layout.component'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Construction: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-2 mt-36">
      <p className="text-7xl xs:text-6xl pb-3 mb-3 font-light">
        Page Under Construction!
      </p>
      <p className="italic text-white/50">I am working hard to bring you something awesome.</p>
      <p className="italic text-white/50">Please check back later!</p>
    </div>
  );
};

Construction.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Under Construction">{page}</Layout>;
};

export default Construction;
