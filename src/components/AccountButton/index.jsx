import React from 'react';
import { Button } from './styled';

function AccountButton({ type, children }) {
    return(
        <Button type={ type }>{ children }</Button>
    );
}

export default AccountButton;