import Image from 'next/image'
import Link from 'next/link';

export default function Custom404(){
    return (
        <div className=' text-text-white mb-5'>
            <div className='grid grid-rows-2 pt-24 text-center m-4'>
                <div className="flex justify-self-center mb-6">
                    {/* <Link href={'../'}><Image src="/Icon.png" width={75} height={75} alt="Sean's Icon" /></Link> */}
                    <p className='text-5xl text-purple-500 font-bold'>404</p>
                </div>
                <Link href={'../'}>
                    <h3>Oops! The page you are looking for can&apos;t be found</h3>
                </Link>
                <Link href={'../'}>
                    <p className="text-text-white text-lg inline-block group transition">
                        <span className="inline-block transform transition-transform translate-x-0 group-hover:-translate-x-2">&larr; &nbsp;</span>
                        Go Back
                    </p>
                </Link>
            </div>
        </div>
    );
}