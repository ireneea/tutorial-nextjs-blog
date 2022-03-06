import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Learn Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1 className="title">
                    Read {' '}
                    <Link href="/posts/first-post"><a>First post page</a>
                    </Link>
                </h1>

            </main>
        </Layout>
    )
}
