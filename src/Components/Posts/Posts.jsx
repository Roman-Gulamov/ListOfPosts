import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Header, HeaderIcon, HeaderSearch, SearchInput } from '../../styles/search';
import  sortName  from './sortName';

import { Container } from '../../styles/container';
import { Card } from '../../styles/card';
import  BlogMap  from './BlogMap';

export const Posts = () => {
    const sortRef = useRef();

    return (
        <>
        <Header>
            <HeaderIcon>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </HeaderIcon>
            <HeaderSearch>
                <SearchInput
                    type="text" 
                    className="header-search"
                    onInput={(event) => sortName(event, sortRef)} 
                    placeholder="Search..."
                />
            </HeaderSearch>
        </Header>
        <Card>
            <Container ref={sortRef}>
                <BlogMap />
            </Container>
        </Card>
        </>
    )
}
