import React from 'react';
import { InputContainer, TxtLabel, Input} from './styled';

function InputData({ children, type, placeholder, onChange }) {
    const birthDateHandler = (e) => {
        let v = e.target.value.replace(/\D/g, "");
    
        v = v.replace(/(\d{2})(\d)/, "$1/$2");
    
        v = v.replace(/(\d{2})(\d)/, "$1/$2");
    
        e.target.value = v;
    }; 

    return(
        <InputContainer>
            <TxtLabel>{ children }</TxtLabel>

            {(type == 'birth-date') ? 
                <Input type={ type } placeholder={ placeholder } onChange={birthDateHandler} /> :
                <Input type={ type } placeholder={ placeholder }  />
            }
        </InputContainer>
    );
}

export default InputData;