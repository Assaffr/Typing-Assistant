import React from 'react';

import PhraseMagazine from '@/components/typewriter/phrase-magazine/PhraseMagazine';
import styles from '@/styles/components/typewriter/Typewriter.module.css';
import ShotFeedback from '@/components/typewriter/ShotFeedback';
import { GameStatus } from '@/pages';

const TIMEOUT_DURATION = 300;

const E1 = Math.floor(Math.random() * 5 + 1);
const E2 = Math.floor(Math.random() * 9 + 1);
const E3 = Math.floor(Math.random() * 8 + 1);
const E4 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, ``)
    .substr(0, 1);
const E5 = Math.floor(Math.random() * 6 + 1);
const E6 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, ``)
    .substr(0, 1);
const E7 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, ``)
    .substr(0, 1);
const E8 = Math.floor(Math.random() * 6 + 1);

type Props = {
    emitGameStatus: (gameStatus: GameStatus) => void;
    gameStatus: GameStatus;
};

const Typewriter = ({ emitGameStatus, gameStatus }: Props) => {
    const [activeBulletIndex, setActiveBulletIndex] = React.useState(0);
    const [isBullsEye, setIsBullsEye] = React.useState<boolean | null>(null);
    const [userShootPhrase, setUserShootPhrase] = React.useState(``);

    const phrases = [E1, E2, E3, E4, E5, E6, E7, E8];

    const resetGame = () => {
        setActiveBulletIndex(0);
        setIsBullsEye(null);
    };

    React.useEffect(() => {
        if (gameStatus === `idle`) {
            resetGame();
        }
    }, [gameStatus]);

    const resetInput = () => {
        setUserShootPhrase(``);
    };

    const nextTurn = () => {
        setActiveBulletIndex(activeBulletIndex + 1);
        resetInput();
    };

    const gameOver = () => {
        emitGameStatus(`game-over:win`);
        resetInput();
    };

    const handleUserShoot: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        const userShoot = event.target.value;
        setUserShootPhrase(userShoot);
        if (phrases[activeBulletIndex].toString() === userShoot) {
            setIsBullsEye(true);
        } else {
            setIsBullsEye(false);
        }

        if (activeBulletIndex === phrases.length - 1) {
            gameOver();
        } else {
            setTimeout(nextTurn, TIMEOUT_DURATION);
        }
    };

    return (
        <div className={styles.typewriter}>
            <PhraseMagazine
                activeBullet={activeBulletIndex}
                phrases={phrases}
            />
            {typeof isBullsEye === `boolean` ? (
                <ShotFeedback isBullsEye={isBullsEye} />
            ) : (
                ``
            )}
            <div className={styles.MegaInputBox}>
                <input
                    type="text"
                    value={userShootPhrase}
                    onChange={handleUserShoot}
                />
            </div>
        </div>
    );
};

export default Typewriter;
