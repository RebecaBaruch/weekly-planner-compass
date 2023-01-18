import React from 'react';

import { Select } from './styled';

function SelectPlanner({ width, children, value, onChange }) {

    return(
        <Select width={ width } value={ value } onChange={ onChange }>
            { children }
        </Select>
    );
}

export default SelectPlanner;