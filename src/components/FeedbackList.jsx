import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, onDeleteFeedback }) {
    if (!feedback || feedback.length === 0)
        return <h3 className="msg">No Feedback Yet</h3>

    return (
        <ul>
            {feedback.map((el) => (
                <FeedbackItem
                    item={el}
                    key={el.id}
                    onDeleteFeedback={onDeleteFeedback}
                />
            ))}
        </ul>
    )
}

FeedbackList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
}

export default FeedbackList
