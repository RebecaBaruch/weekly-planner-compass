import React from 'react';
import { InputContainer, TxtLabel, Input} from './styled';

function InputData({ children, type, placeholder }) {
    return(
        <InputContainer>
            <TxtLabel>{ children }</TxtLabel>
            <Input type={ type } placeholder={ placeholder } />
        </InputContainer>
    );
}

export default InputData;