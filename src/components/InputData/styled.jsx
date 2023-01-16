import styled from  'styled-components';

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 30px;
    align-items: center;
`;

export const TxtLabel = styled.label`
    font-weight: 400;
    font-size: 1rem;
    color: #E0E0E0;

    ${({ children }) => !children ? 
        `& {
            display: none;
        }
        
        & ~ input{
            width: 379px;
        }` :
        `& ~ input{
            width: 300px;    
        }` 
    }
`;

export const Input = styled.input`
    padding: 0.8rem;
    color: #E0E0E0;
        background: #26292C;
    border: 1px solid #FFFFFF;
    border-radius: 50px;
    -webkit-appearance: none;
    appearance: none;

    &::placeholder {
        color: #E0E0E0;
        font-size: 0.7rem
    }
`;