import Head from 'next/head';
import Typewriter from '@/components/typewriter/Typewriter';
import styles from '@/styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <meta
                    name="description"
                    content="Typing Assistant app Helps you to type right with no error. Try it out now!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to Typing Assistant</h1>
                <p className={styles.description}>
                    Start typing The characters and phrases appearing in the
                    roller
                </p>
                <Typewriter />
            </main>
        </div>
    );
}
