import React, { useContext } from 'react';
import { Context } from '../../hooks/context';


export const BlogMap = () => {
    const mapFiles = useContext(Context);

    return (
        <>
        {mapFiles.posts.map(post => (
            mapFiles.users.map(user => (
                post.userId === user.id ?
                <div key={ user.id }>
                    <hr/>
                        { user.name }
                        <hr/>
                        { post.title }
                        { post.body }
                    <hr/>
                </div> : null
            ))
        ))}
        </>
    )
}
