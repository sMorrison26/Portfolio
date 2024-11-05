import Head from 'next/head'
import Link from 'next/link'

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
      <nav id="header" className="absolute top-0 left-0 w-full text-white font-extralight font-virtual text-4xl">
        <div className="sm:w-3/4 md:w-4/5 flex items-center justify-between mx-auto p-4 border-b border-b-purple-400/40">
          <div className="w-1/4">
            <Link href="https://seanm.tech/" className="hover:underline hover:shadow-lg hover:shadow-theme-1">
              <p className="sm:hidden">Sean</p>
              <p className="hidden sm:inline">Sean Morrison</p>
            </Link>

          </div>
          <div className="flex w-1/2 justify-center">
            <Link href={"./projects"} className="m-4 hover:underline hover:shadow-lg hover:shadow-theme-1">Projects</Link>
          </div>
          <div className="flex w-1/4 justify-end">
            <Link href={'./contact'} className="hover:underline hover:shadow-lg hover:shadow-theme-1 bg-transparent">Contact </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
