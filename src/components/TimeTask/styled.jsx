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

background: ${ ({ color }) => color };
border-bottom: 1px solid #DCDFE3;
border-radius: 10px;
`;