import React from 'react';
import { sortRef } from '../../hooks/ref';

import { Container } from '../../styles/container';
import { Card } from '../../styles/card';
import { BlogMap } from './BlogMap';


export const Blog = () => {
    return (
        <Container>
            <Card ref={sortRef}>
                <BlogMap />
            </Card>
        </Container>
    )
}
