import styled from 'styled-components';

const ClayPhrase = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 170px;
    border: 1px dashed aliceblue;
    transform: scale(
        ${({ isActive }: { isActive: boolean }) => (isActive ? `1.2` : `1`)}
    );
    transition: transform 0.3s;
`;

export default ClayPhrase;
