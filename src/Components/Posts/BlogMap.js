import React, { useContext } from 'react';
import Context from '../../services/context';
import findUserImg from './findUserImg';
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

const BlogMap = () => {
    const mapFiles = useContext(Context);

    return (
        <>
        {mapFiles.users.map(user => (
            mapFiles.posts.map(post => (
                post.userId === user.id ?
                <CardItem key={ post.id }>
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

export default BlogMap
