import styled from 'styled-components';
import { GameStatus } from '@/pages';

type Props = {
    className?: string;
    gameStatus: GameStatus;
    emitRestartGame: () => void;
};

const GameOverAlertBox = ({
    className,
    gameStatus,
    emitRestartGame,
}: Props) => (
    <div className={className}>
        <div>
            <h3>Game Over {gameStatus === `game-over:win` ? `🥳` : `😭`}</h3>
            <p>
                <button onClick={emitRestartGame}>Start again</button>
            </p>
        </div>
    </div>
);

const GameOverAlert = styled(GameOverAlertBox)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 150;

    > div {
        padding: 45px;
        background-color: var(--payl-dark-gray);
    }
    h3 {
        font-size: 45px;
    }

    p {
        font-size: 20px;
    }
`;

export default GameOverAlert;
