import React from 'react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import Layout from '@/components/layout/layout.component'
import Link from 'next/link'

const Custom500: NextPageWithLayout = () => {
  return (
    <div className="text-text-white mb-5">
      <div className="grid grid-rows-2 pt-24 text-center m-4">
        <div className="flex justify-self-center mb-6">
          <p className="text-5xl text-purple-500 font-bold">500</p>
        </div>
        <Link href={"../"}>
          <h3>Oops! Server side error.</h3>
        </Link>
        <Link href={"../"}>
          <p className="text-text-white text-lg inline-block group transition">
            <span className="inline-block transform transition-transform translate-x-0 group-hover:-translate-x-2">
              &larr; &nbsp;
            </span>
            Go Back
          </p>
        </Link>
      </div>
    </div>
  );
};

Custom500.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="500">{page}</Layout>;
};

export default Custom500;
