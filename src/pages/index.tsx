import Link from 'next/link'
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className='p-6 h-fit'>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <Link href='/about' className='text-xl'>
            <h4 className="text-white inline-block group transition">
              About <span className="inline-block transform transition-transform translate-x-0 group-hover:translate-x-2">&rarr;</span>
            </h4>
          </Link>
        </div>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>  
          <p className='text-xl text-justify md:text-4xl bg-clip-text bg-gradient-to-r from-text-white to-purple-700 text-transparent font-bold leading-relaxed'>
            Hi, I&apos;m Sean. <br />
            Passionate web developer. <br />
            Focusing in secure web design. <br />
            Hand crafted web apps. <br />
            Every. Single. Time.
          </p>

        </div>
      </div>
      <div className='p-6 h-fit'>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <Link href='/projects' className='text-xl'>
            <h4 className="text-white inline-block group transition-pl">
              Projects <span className="inline-block transform transition-transform translate-x-0 group-hover:translate-x-2">&rarr;</span>
            </h4>
          </Link>
        </div>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <p className='text-xl md:text-4xl bg-clip-text bg-gradient-to-r from-text-white to-purple-700 text-transparent font-bold leading-relaxed'>
            View my past projects. <br />
          </p>
        </div>
      </div>
    </>
    // <Main />
    /* <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image+_
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image
            src="/thirteen.svg"
            alt="13"
            width={40}
            height={31}
            priority
          />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and&nbsp;API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Learn <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL
            with&nbsp;Vercel.
          </p>
        </a>
      </div>
    </main>  */

  )
}
