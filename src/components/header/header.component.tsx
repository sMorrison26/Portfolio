import Head from 'next/head'
import Link from 'next/link';
export default function Header() {
    return(
        <>
            <Head>
                <title>Portfolio | Sean Morrison</title>
                <meta property="og:title" content="Sean Morrison" key="title" />
                <meta name="description" content="Portfolio | Sean Morrison" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="p-4 grid grid-cols-6 bg-transparent text-text-white ">
                <Link href={'https://seanm.tech'} className="col-span-5"><h1>Sean Morrison</h1></Link>
                <div className="flex justify-around">
                    <Link href={'/construction'} className="underline underline-offset-4 hover:text-red-700">Projects</Link>
                    <Link href={'/construction'} className="underline underline-offset-4 hover:text-red-700">About</Link>
                    {/* TODO: add a github icon to header */}
                </div>
            </div>
        </>
    );
}