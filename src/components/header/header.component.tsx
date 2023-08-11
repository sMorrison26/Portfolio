import Head from 'next/head'
import Link from 'next/link';
// import Image from 'next/image';
export default function Header() {
    return (
        <>
            <Head>
                <title>Portfolio | Sean Morrison</title>
                <meta property="og:title" content="Sean Morrison" key="title" />
                <meta name="description" content="Portfolio | Sean Morrison" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex justify-between bg-transparent text-text-white">
                <div className='flex justify-start'>
                    <Link href={'https://seanm.tech'}>                        
                        <p className='text-xl md:text-3xl'>Sean Morrison</p>
                    </Link>
                </div>
                <div className="flex justify-around items-center">
                    <Link href={'/construction'} className="hover:underline underline-offset-4 hover:text-purple-400 mr-4">Projects</Link>
                    <Link href={'/construction'} className="hover:underline underline-offset-4 hover:text-purple-400 mr-4">About</Link>
                    <Link href={'/construction'} className="hover:underline underline-offset-4 hover:text-purple-400 mr-4">Contact</Link>
                </div>
            </div> */}
            {/* <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://seanm.tech/" className="flex items-center">
                        <img src="/Icon.png" className="h-8 mr-3" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sean Morrison</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="https://seanm.tech" className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 dark:text-white md:dark:text-purple-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/projects" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                            </li> 
                            <li>
                                <a href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <nav className="bg-gray-900 border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://seanm.tech/" className="flex items-center">
                        <img src="/Icon.png" className="h-8 mr-3" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-text-white">Sean Morrison</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900">
                            <li>
                                <a href="https://seanm.tech" className="block py-2 pl-3 pr-4 text-text-white rounded hover:bg-gray-700 md:bg-transparent md:hover:text-purple-500 md:p-0 md:hover:bg-transparent" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/projects" className="block py-2 pl-3 pr-4 text-text-white rounded hover:bg-gray-700 md:border-0 md:hover:text-purple-500 md:p-0 md:hover:bg-transparent">Projects</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 pl-3 pr-4 text-text-white rounded hover:bg-gray-700 md:border-0 md:hover:text-purple-500 md:p-0 md:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="block py-2 pl-3 pr-4 text-text-white rounded hover:bg-gray-700 md:border-0 md:hover:text-purple-500 md:p-0 md:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
            {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        </>
    );
}