import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 12px;
    gap: 4px;

    font-weight: 700;
    color: #FFFFFF;
    background: ${ ({ color }) => color};
    border-radius: 10px;
`;