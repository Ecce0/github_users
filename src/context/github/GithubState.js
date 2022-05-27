import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
 SEARCH_USERS,
 SET_LOADING,
 CLEAR_USERS,
 GET_USER,
 GET_REPOS
} from '../types';


let gitHubToken;

if(process.env.NODE_ENV !== 'production'){
  gitHubToken = process.env.REACT_APP_GITHUB_TOKEN;
} else {
  gitHubToken = process.env.GITHUB_TOKEN;
}

const GithubState = ({ children }) => {
  const initialState = {
   users: [],
   user: {},
   repos: [],
   loading: false
  }

  const [ state, dispatch ] = useReducer(GithubReducer, initialState)

  const github = axios.create({
    baseURL: 'https://api.github.com',
    headers: { Authorization: gitHubToken }
  })
  
  const searchUsers = async (text) => {
    setLoading()
    const res = await github.get(`/search/users?q=${text}`)
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  }
  
  const getUser = async (username) => {
    setLoading()
    const res = await github.get(`/users/${username}?`)
    dispatch({
      type: GET_USER,
      payload: res.data
    })

  }

  const getUserRepos = async (username) => {
       setLoading()     
       const res = github.get(`/users/${username}/repos?per_page=5&sort=created:asc?`)
       dispatch({
        type: GET_REPOS,
        payload: res.data
      })   
  }

  //Clear users
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS
    })
  }


  //Set loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    })
  }
  
  const { users, user, repos, loading } = state
    return <GithubContext.Provider value={{
        users,
        user,
        repos,
        loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
            {children}
    </GithubContext.Provider>
}

export default GithubState