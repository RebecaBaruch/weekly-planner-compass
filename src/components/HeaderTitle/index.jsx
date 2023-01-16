import React from 'react';
import { TextContainer, Title, Text } from './styled';


function HeaderTitle({ title, children }) {
    return(
        <TextContainer>
            <Title>{ title }</Title>
            <Text>{ children }</Text>
        </TextContainer>
    );
}

export default HeaderTitle;