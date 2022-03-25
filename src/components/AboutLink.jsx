import React from 'react'
import {Link} from 'react-router-dom'
import {FaRegQuestionCircle} from 'react-icons/fa'

function AboutLink() {
  return (
    <div className='about-link'>
      <Link to={{pathname: '/about'}}>
      <FaRegQuestionCircle colot='purple' size={40}/>
      </Link>
    </div>
  )
}

export default AboutLink