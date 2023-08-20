import Link from "next/link";
import Layout from "@/components/layout/layout.component";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import React from "react";

const Custom404: NextPageWithLayout = () => {
  return (
    <div className=" text-text-white mb-5">
      <div className="grid grid-rows-2 pt-24 text-center m-4">
        <div className="flex justify-self-center mb-6">
          <p className="text-5xl text-purple-500 font-bold">404</p>
        </div>
        <Link href={"../"}>
          <h3>Oops! The page you are looking for can&apos;t be found</h3>
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
Custom404.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="404">{page}</Layout>;
};
export default Custom404;
