import styled from "styled-components";

export const TaskContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: row;
    gap: 1rem;
    align-items: center;  
    width: 100%;
`;
export const TimeList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: fit-content;
    height: 100%;
`;

export const ListTasks = styled.div`
    position: relative;
    display: flex;
    justify-content: start;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    width: 100%;
    height: fit-content;

    background-color: ${({ borderColor }) => borderColor};

    ${({ checkDesc }) => checkDesc ? 
        `&:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 0px;
        border: 3px solid #000000b2;
        border-radius: 5px; }` :
        ""
    }
`;