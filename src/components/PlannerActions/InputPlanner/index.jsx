import React from 'react';

import { Input } from './styled';

function InputPlanner({ width, value, onChange }) {

    return(
        <Input width={ width } value={ value } onChange={ onChange } />
    );
}

export default InputPlanner;