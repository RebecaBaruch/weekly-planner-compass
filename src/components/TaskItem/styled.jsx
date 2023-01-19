import styled from 'styled-components';

export const TaskBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 1rem;
    align-item: start;
    padding: 1rem;
    width: 512px;
    height: 75px;
    text-align: left;

    border-left: 15px solid ${({ borderColor}) => borderColor};
    border-top: 1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
    background: linear-gradient(112.83deg, rgba(228, 240, 248, 0.42) 0%, rgba(255, 255, 255, 0.336) 110.84%);
    box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.02);
    backdrop-filter: blur(10.5px);

    border-radius: 15px;
`;

export const TaskText = styled.p`
    font-size: 1rem;
    color: #333333;
`;

export const DeleteButton = styled.button`
    padding: 0 0.3rem;
    width: 57px;
    height: 25px;
    font-size: 0.7rem
    font-weight: bold;
    
    color: white;
    background: #FF3D1F;
    border-radius: 4px;
`;