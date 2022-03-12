import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../styles/util.module.css';
import {ReactChildren} from "react";

export const ownerName = "Irenee";
export const siteTitle = 'Next.js Sample Website';

type LayoutProps = React.PropsWithChildren<{
    home?: boolean;
}>

export default function Layout({children, home = false}: LayoutProps) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/student.ico"/>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>

            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.png"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={ownerName}
                        />
                        <h1 className={utilStyles.heading2Xl}>{ownerName}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.png"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={ownerName}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{ownerName}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>

            <main>
                {children}
            </main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}