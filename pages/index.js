import Link from 'next/link';

import utilStyles from "../styles/util.module.css";
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout pageTitle="Learn Next Apps" home={true}>
            <section className={utilStyles.headingMd}>
                <p>Hello, I'm <b>Irénée</b>. I'm a software software engineer playing around with new techs</p>

                <Link href="/posts/first-post">
                    <a>First post</a>
                </Link>
            </section>
        </Layout>
    )
}

