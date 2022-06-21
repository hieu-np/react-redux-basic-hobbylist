import React from 'react'
import PropTypes from 'prop-types'

HobbyList.propTypes = {
  HobbyList: PropTypes.array,
}

HobbyList.defaultProps = {
  HobbyList: []
}


function HobbyList(props) {
  const {hobbyList} = props;

  return (
    <ul>
      {hobbyList.map((hobby, i) => (
        <li key={i}>
          {hobby.title}
        </li>
      ))}
    </ul>
  )
}

export default HobbyList