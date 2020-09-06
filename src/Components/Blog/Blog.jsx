import React from 'react';
import { sortRef } from '../../hooks/ref';

import { Container } from '../../styles/container';
import { Card } from '../../styles/card';
import { BlogMap } from './BlogMap';


export const Blog = () => {
    return (
        <Card>
            <Container ref={sortRef}>
                <BlogMap />
            </Container>
        </Card>
    )
}
