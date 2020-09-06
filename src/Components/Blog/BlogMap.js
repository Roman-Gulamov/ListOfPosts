import React, { useContext } from 'react';
import { Context } from '../../hooks/context';
import { findUserImg } from './findUserImg';
import { 
    CardItem, 
    CardImg,
    ImgItem,
    CardPost, 
    PostName,
    NameReal, 
    PostMail, 
    PostTitle, 
    PostText
} from '../../styles/card';

export const BlogMap = () => {
    const mapFiles = useContext(Context);

    return (
        <>
        {mapFiles.posts.map(post => (
            mapFiles.users.map(user => (
                post.userId === user.id ?
                <CardItem key={ user.id }>
                    <CardImg>
                        <ImgItem src={findUserImg(user.id)} alt={user.name}/>
                    </CardImg>
                    <CardPost>
                        <PostName>{user.username} <NameReal>{user.name}</NameReal></PostName>
                        <PostMail>{user.email}</PostMail>
                        <PostTitle>{post.title}</PostTitle>
                        <PostText>{post.body}</PostText>
                    </CardPost>
                </CardItem> : null
            ))
        ))}
        </>
    )
}
