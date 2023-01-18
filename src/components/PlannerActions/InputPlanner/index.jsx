import React from 'react';

import styled from 'styled-components';

function InputPlanner({ placeholder, type, width }) {
    const Input = styled.input`
        padding: 1rem;
        width: ${ width };
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.7);
        border: 1px solid #FECE00; 
        border-radius: 10px; 
        background: #FFFFFF;
    `;

    return(
        <Input width={ width } type={ type } placeholder={ placeholder } />
    );
}

export default InputPlanner;