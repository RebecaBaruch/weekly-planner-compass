import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem;
    gap: 4px;

    font-size: 0.8rem;
    font-weight: 700;
    color: #FFFFFF;
    background: ${ ({ color }) => color};
    border-radius: 10px;
`;