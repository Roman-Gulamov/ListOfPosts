import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../config/preparation';

const Title = styled.h1`
    color: red;
    text-align: center;
`

const App = () => {
    const [title, setTitle] = useState('Hello!');

    return (
        <>
        <GlobalStyle />
        <div>
            <Title>{title}</Title>
        </div>
        </>

    );
}

export default App;
