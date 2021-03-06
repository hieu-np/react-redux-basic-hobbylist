import React from 'react'
import PropTypes from 'prop-types'

HobbyList.propTypes = {
  HobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func
}

HobbyList.defaultProps = {
  HobbyList: [],
  active: null,
  onHobbyClick: null
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