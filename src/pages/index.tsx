import GameOverAlert from '@/components/alerts/GameOverAlert';
import Typewriter from '@/components/typewriter/Typewriter';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import Head from 'next/head';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css';
// swiper core styles
import 'swiper/swiper.min.css';

export type GameStatus =
    | 'idle'
    | 'running'
    | 'game-over:win'
    | 'game-over:lose';

export default function Home() {
    const [gameStatus, setGameStatus] = useState<GameStatus>(`idle`);

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
                <Typewriter
                    emitGameStatus={(gameStatus) => {
                        setGameStatus(gameStatus);
                    }}
                    gameStatus={gameStatus}
                />
                {gameStatus.startsWith(`game-over`) ? (
                    <GameOverAlert
                        gameStatus={gameStatus}
                        emitRestartGame={() => {
                            setGameStatus(`idle`);
                        }}
                    />
                ) : (
                    ``
                )}
            </main>
        </div>
    );
}
