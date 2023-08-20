import Link from "next/link";
import Layout from "../components/layout/layout.component";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="p-6 h-fit">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <Link href="/about" className="text-xl">
            <h4 className="text-white inline-block group transition">
              About{" "}
              <span className="inline-block transform transition-transform translate-x-0 group-hover:translate-x-2">
                &rarr;
              </span>
            </h4>
          </Link>
        </div>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <p className="text-xl w-fit md:text-4xl bg-clip-text bg-gradient-to-r from-text-white to-purple-700 text-transparent font-bold leading-relaxed">
            Hi, I&apos;m Sean. <br />
            Passionate web developer. <br />
            Focusing in secure web design. <br />
            Hand crafted web apps. <br />
            Every. Single. Time.
          </p>
        </div>
      </div>
      <div className="p-6 h-fit">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <Link href="/projects" className="text-xl">
            <h4 className="text-white inline-block group transition-pl">
              Projects{" "}
              <span className="inline-block transform transition-transform translate-x-0 group-hover:translate-x-2">
                &rarr;
              </span>
            </h4>
          </Link>
        </div>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <p className="text-xl w-fit md:text-4xl bg-clip-text bg-gradient-to-r from-text-white to-purple-700 text-transparent font-bold leading-relaxed">
            View my past projects. <br />
          </p>
        </div>
      </div>
    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
