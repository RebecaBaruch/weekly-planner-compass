import styled from "styled-components";

export const TimeBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
width: 75px;
height: 75px;
font-size: 1rem;
font-weight: bold;

--monday: #ff0024;
--tuesday: #ff8000;
--wednesday: #ffce00;
--thursday: rgba(255, 0, 36, 0.7);
--friday: rgba(255, 128, 0, 0.7);
--saturday: rgba(255, 206, 0, 0.7);
--sunday: rgba(255, 0, 36, 0.5);
background: var(--${ ({ color }) => color });
border-bottom: 1px solid #DCDFE3;
border-radius: 10px;
`;