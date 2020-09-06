/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Axios from "axios";

import { Context } from '../hooks/context';
import { GlobalStyle } from '../styles/preparation';
import { Error } from './Error/Error';
import { Search } from './Search/Search';
import { Blog } from './Blog/Blog';


export const App = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [postsError, setPostsError] = useState(false);
    const [usersError, setUsersError] = useState(false);

    const axios = Axios.create();
    const url = "https://jsonplaceholder.typicode.com"
    const header = {
        header: {'Access-Control-Allow-Origin': 'https://jsonplaceholder.typicode.com/',}
    }


    useEffect(() => {
        axios
        .get(`${url}/posts`, header)
        .then((response) => {
            setPosts(response.data);
            getUsers();
        })
        .catch((error) => {
            error.response || error.request ? setPostsError(true) : setPostsError(false)
        })
    },[]);

    const getUsers = () => {
        axios
        .get(`${url}/users`, header)
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            error.response || error.request ? setUsersError(true) : setUsersError(false)
        })
    }
    

    if (!postsError && !usersError) {
        return (
            <Context.Provider value={{ posts, users }}>
                <>
                <GlobalStyle />
                    <Search />
                    <Blog />
                </>
            </Context.Provider>
        );
    } else {
        return (
            <>
            <GlobalStyle />
                <Error />
            </>
        )
    }
}