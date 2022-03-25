import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ data }) {
    return (
        <ul>
            {data.map((el) => (
                <FeedbackItem item={el} key={el.id} />
            ))}
        </ul>
    )
}

FeedbackList.propTypes = {
    data: PropTypes.array,
}

export default FeedbackList
