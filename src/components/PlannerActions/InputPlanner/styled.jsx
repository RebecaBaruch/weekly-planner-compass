import styled from 'styled-components';

export const Input = styled.input`
    padding: 0.7rem;
    width: ${ ({ width }) => width};
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid #FECE00; 
    border-radius: 10px; 
    background: #FFFFFF;
`;