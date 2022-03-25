import React from 'react'

function FeedbackStats({ feedback }) {
    let averageRating = feedback.reduce(
        (acc, cur, _, arr) => acc + cur.rating / arr.length,
        0
    )

    averageRating = averageRating.toFixed(1).replace(/\.0+$/, '')

    return (
        <div className="feedback-stats">
            <p>{feedback.length} Reviews</p>
            <p>Average Rating: {averageRating}</p>
        </div>
    )
}

export default FeedbackStats
