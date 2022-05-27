import React from 'react'
import PropTypes from 'prop-types'    

const OneRepo = ({ repo }) => {
  return (
    <div className="card">
        <h3>
            <a href={repo.html_url}>{repo.name}</a>
        </h3>
    </div>
  )
}

OneRepo.propTypes = {
    repo: PropTypes.object.isRequired
}

export default OneRepo