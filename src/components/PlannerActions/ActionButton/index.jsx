import React from "react";

import { Button } from './styled';

function ActionButton({ type, color, onClick, children }) {

    return(
        <Button type={ type } color={ color } onClick={ onClick }>{ children }</Button>
    );
}

export default ActionButton;