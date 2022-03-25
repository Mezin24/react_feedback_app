import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Header({ text, bgColor, color }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color,
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <Link to={{pathname: '/'}} style={{textDecoration: 'none'}}>
                    <h1 style={{color}}>{text}</h1>
                </Link>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback App',
    color: '#ff6a95',
    bgColor: 'rgba(0, 0, 0, 0.4)',
}

Header.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
}

export default Header
