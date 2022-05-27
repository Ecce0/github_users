import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import { Link, useParams } from 'react-router-dom'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/GithubContext'

const User = () => {
 const githubContext = useContext(GithubContext)
 const { username } = useParams()

  useEffect(() => {
   getUser(username)
   getUserRepos(username)
   // eslint-disable-next-line
  }, [])

  const { getUser, loading, user, repos, getUserRepos } = githubContext

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        company
    } = user


 return(
     loading ? <Spinner /> :
        <Fragment>
            <Link to='/' className='btn btn-light'>
                Back to search
            </Link>
            Hireable:{' '}
            {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt="" className='round-img' style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (
                        <>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </>
                    )}
                    <a href={html_url} className='btn btn-dark my-1'>
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {login &&
                                <>
                                    <b>Username:</b> {login}
                                </>
                            }
                        </li>
                        <li>
                            {company &&
                                <>
                                    <b>Company:</b> {company}
                                </>
                            }
                        </li>
                        <li>
                            {blog &&
                                <>
                                    <b>Website:</b> {blog}
                                </>
                            }
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">
                    Followers: {followers}
                </div>
                <div className="badge badge-success">
                    Following: {following}
                </div>
                <div className="badge badge-light">
                    Public Repos: {public_repos}
                </div>
                <div className="badge badge-dark">
                    Public Gists: {public_gists}
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
        
 )

}

export default User

