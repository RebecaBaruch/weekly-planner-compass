import React from 'react';

import { Input } from './styled';

function InputPlanner({ width, value, placeholder, onChange }) {

    return(
        <Input width={ width } value={ value } placeholder={ placeholder } onChange={ onChange } />
    );
}

export default InputPlanner;