import React from 'react'
import PropTypes from 'prop-types'

function Button({ type, isDisabled, children, variation, onClick }) {
    return (
        <button
            className={`btn btn-${variation}`}
            type={type}
            disabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    isDisabled: false,
    children: 'Click',
    variation: 'primary',
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    variation: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

export default Button
