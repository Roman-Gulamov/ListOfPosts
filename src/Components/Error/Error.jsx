import React from 'react';
import { ErrorMes, ErrorMesText } from '../../styles/error';

export const Error = () => {
    return (
        <ErrorMes className="result">
            <ErrorMesText>
                Error connecting to server...
            </ErrorMesText>
        </ErrorMes>
    )
}
