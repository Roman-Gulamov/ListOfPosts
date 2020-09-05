import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { sortName } from './sortName';
import { Header } from '../../styles/search';


export const Search = () => {
    return (
        <Header>
            <div>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
            </div>
            <input
                type="text" 
                className="header-search"
                onInput={(event) => sortName(event)} 
                placeholder="Search..." 
            />
        </Header>
    )
}
