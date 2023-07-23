import Image from 'next/image'
import Head from '@/components/header/header.component'
import Link from 'next/link';

export default function Custom404(){
    return(
        <div className="bg-gradient-to-b from-zinc-800 to-gray-700 h-screen">
            <Head />
            <div className='h-screen w-screen bg-gradient-to-tr from-purples to-dark-purple text-text-white'>
                <div className='grid grid-rows-2 pt-24 text-center'>
                    <div className="flex justify-self-center mb-6">
                        <Link href={'../'}><Image src="/Icon.png" width={75} height={75} alt="Sean's Icon" /></Link>
                    </div>
                    <Link href={'../'}><h2 className='w-screen h-fit'>Oops! The page you are looking for can&apos;t be found</h2></Link>
                </div>
            </div>
        </div>
    );
}