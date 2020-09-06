import styled from 'styled-components';


export const Card = styled.main`
    display: flex;
    margin-top: 50px;
`
export const CardItem = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid black;
    border-radius: 30px;
    padding: 15px 30px;
    margin: 20px 0;
`

export const CardImg = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
`

export const ImgItem = styled.img`
    width: 100px;
    height: auto;
`

export const CardPost = styled.div`
    margin-left: 10px;
`

export const PostName = styled.div`
    font-size: 25px;
    font-weight: bold;
`

export const NameReal = styled.span`
    font-size: 15px;
    color: #808080;
`

export const PostMail = styled.div`
    font-size: 23px;
    color: #00008b;
`

export const PostTitle = styled.div`
    font-weight: bold;
    text-transform: uppercase;
`

export const PostText = styled.div`
    &:first-letter {
        text-transform: uppercase;
        font-size: 23px;
    }
`