import React from "react";

import styled from "styled-components";

function ActionButton({ type, color, children }) {
    const Button = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 12px;
        gap: 4px;
    
        font-weight: 700;
        color: #FFFFFF;
        background: ${ color };
        border-radius: 10px;
    `;

    return(
        <Button type={ type } color={ color }>{ children }</Button>
    );
}

export default ActionButton;