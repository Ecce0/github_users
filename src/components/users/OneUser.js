import React from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom'


const OneUser = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '100px' }}
      />
      <h3>{login}</h3>

      <Link to={`/user/${login}`}>
        <div className='btn btn-dark btn-sm my-1'>
          More
        </div>
      </Link>    
    </div>
  )
}

OneUser.propTypes = {
  user: PropTypes.object.isRequired
}

export default OneUser;