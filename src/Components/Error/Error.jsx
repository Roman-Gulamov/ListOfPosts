import React from 'react';
import { ErrorMes } from '../../styles/error';

export const Error = () => {
    return (
        <ErrorMes className="result">
            <span role="img" aria-label="cry">&#128547;</span>
                Ошибка при загрузки
            <span role="img" aria-label="cry">&#128547;</span>
        </ErrorMes>
    )
}
