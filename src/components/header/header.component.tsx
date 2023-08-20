import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title?: string;
};

export default function Header({ title = "Portfolio" }: Props) {
  const titleValue = `${title} | Sean Morrison`;
  return (
    <>
      <Head>
        <title>{titleValue}</title>
        <meta property="og:title" content="Sean Morrison" key="title" />
        <meta name="description" content="Portfolio | Sean Morrison" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-gray-900 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="https://seanm.tech/" className="flex items-center">
            <Image
              src="/Icon.png"
              className="h-8 mr-3"
              alt="Logo"
              width={32}
              height={32}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-text-white">
              Sean Morrison
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900">
              <li>
                <Link
                  href="https://seanm.tech"
                  className="block py-2 pl-3 pr-4 text-text-white rounded hover:bg-gray-700 md:bg-transparent md:hover:text-purple-500 md:p-0 md:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block py-2 pl-3 pr-4 text-text-white rounded hover:bg-gray-700 md:border-0 md:hover:text-purple-500 md:p-0 md:hover:bg-transparent"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/construction"
                  className="block py-2 pl-3 pr-4 text-text-white rounded hover:bg-gray-700 md:border-0 md:hover:text-purple-500 md:p-0 md:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/construction"
                  className="block py-2 pl-3 pr-4 text-text-white rounded hover:bg-gray-700 md:border-0 md:hover:text-purple-500 md:p-0 md:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}
