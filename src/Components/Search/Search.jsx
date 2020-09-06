import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { sortName } from './sortName';
import { Header, HeaderIcon, HeaderSearch, SearchInput } from '../../styles/search';


export const Search = () => {
    return (
        <Header>
            <HeaderIcon>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </HeaderIcon>
            <HeaderSearch>
                <SearchInput
                    type="text" 
                    className="header-search"
                    onInput={(event) => sortName(event)} 
                    placeholder="Search..." 
                />
            </HeaderSearch>
        </Header>
    )
}
