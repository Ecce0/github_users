import React from 'react'
import OneRepo from './OneRepo'

const Repos = ({ repos = [] }) => {
  return repos.map((repo) => <OneRepo key={repo.id} repo={repo}/>)
}

export default Repos

