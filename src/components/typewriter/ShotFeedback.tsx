import styled from 'styled-components';

type Props = {
    className?: string;
    isBullsEye: boolean | null;
};

const ShotFeedbackBox = ({ isBullsEye, className }: Props) => (
    <div className={className}>{isBullsEye ? `Hit!` : `Miss`}</div>
);

const ShotFeedback = styled(ShotFeedbackBox)`
    width: 350px;
    padding: 20px;
    text-align: center;
    margin: 20px auto;
    font-size: 48px;
    font-weight: bold;
    background-color: ${({ isBullsEye }) => (isBullsEye ? `green` : `red`)};
`;

export default ShotFeedback;
