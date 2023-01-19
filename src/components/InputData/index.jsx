import styled from  'styled-components';

const InputData = styled.input`
    padding: 0.5rem;
    width: 279px;
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

    &.invalid, &:focus.invalid {
        outline-color: red;
        border-color: red;
    }
`;

export default InputData;