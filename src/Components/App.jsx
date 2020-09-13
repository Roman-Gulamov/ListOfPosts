/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from '../services/axios';

import Context from '../services/context';
import { GlobalStyle } from '../styles/preparation';
import { Error } from './Error/Error';
import { Posts } from './Posts/Posts';


export const App = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [postsError, setPostsError] = useState(false);
    const [usersError, setUsersError] = useState(false);
    
    const url = "https://jsonplaceholder.typicode.com";

    
    useEffect(() => {
        axios
        .get(`${url}/posts`)
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
        .get(`${url}/users`)
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
                    <Posts />
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