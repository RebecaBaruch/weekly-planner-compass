import styled from "styled-components";

export const TimeBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
width: 85px;
height: 85px;
font-weight: bold;

background: ${ ({ color }) => color };
border-bottom: 1px solid #DCDFE3;
border-radius: 10px;
`;