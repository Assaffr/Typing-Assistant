import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/global.css';
import '@/styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Typing Assistant App | Refine your typing skills!</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
