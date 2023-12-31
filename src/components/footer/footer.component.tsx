import Image from 'next/legacy/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="bg-gray-900 rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://seanm.tech/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              src="/Icon.webp"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 mr-3"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Sean&apos;s Portfolio
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <Link href="/projects" className="mr-5 hover:underline md:mr-6">
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/construction"
                className="mr-5 hover:underline md:mr-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link href="/construction" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="https://seanm.tech/" className="hover:underline">
            Sean Morrison
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
