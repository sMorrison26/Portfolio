import Layout from "../components/layout/layout.component";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/legacy/image";

const Home: NextPageWithLayout = () => {
  return (

    <div className="max-w-screen-xl flex flex-col justify-between p-4 h-full mx-auto">
      <div className="flex justify-between mt-24 h-full">
        <p className="text-6xl sm:text-9xl bg-clip-text bg-gradient-to-r from-white to-theme-1 text-transparent font-bold">
          Hi, I&apos;m<br /> Sean.
        </p>
        <img src="/assets/images/headshot.webp" className="object-cover w-[20%] rounded-full shadow-2xl shadow-theme-1" alt="Sean headshot" />
      </div>
      <div className="italic self-center mt-24">
        <p className="text-justify">
          Passionate. Experienced. Driven.
        </p>
        <p>
          Web Development. Cybersecurity.
        </p>
      </div>
      {/* <FontAwesomeIcon icon={faAngleDown} style={{ color: "#ffffff", height: '64px' }} className="animate-bounce hover:animate-none hover:cursor-pointer w-fit self-center mt-24" /> */}
    </div>


  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;