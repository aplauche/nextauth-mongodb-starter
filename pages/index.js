import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signOut, signIn, signUp } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {

  const { data: session } = useSession()
  return (
    <div>
      <Head>
        <title>Basic Auth</title>
      </Head>

      <main>
        <h1>Hello {session?.user?.email || "Unknown"}</h1>
        {session?.user?.email ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <Link href="/login">
            <button onClick={() => signIn()}>Sign In</button>
          </Link>
        )}
      </main>
    </div>
  )
}
