import React from 'react';

import styled from 'styled-components';

function SelectPlanner({ width, children }) {
    const Select = styled.select`
        padding: 1rem;
        width: ${ width };
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.7);
        border: 1px solid #FECE00; 
        border-radius: 10px; 
        background: #FFFFFF;
    `;

    return(
        <Select width={ width }>
            { children }
        </Select>
    );
}

export default SelectPlanner;