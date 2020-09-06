import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #00acee;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    padding: 0 70px;
`

export const HeaderIcon = styled.div`
    color: white;
    margin-right: 10px;
`

export const HeaderSearch = styled.div`
    color: white;
    width: 90%;
    height: 40px;
`

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: 4px solid #00acee;
    padding: 5px 10px;
    border-radius: 10px;
    transition: border-color 0.4s ease;

    &:focus {
        outline: none;
        border-color: #0d8fc2;
    }
`

