import React, { useContext } from 'react'
import FeedbackContext from './context/FeedbackProvider'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  let averageRating = feedback.reduce(
    (acc, cur, _, arr) => acc + cur.rating / arr.length,
    0
  )

  averageRating = averageRating.toFixed(1).replace(/\.0+$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {averageRating}</h4>
    </div>
  )
}

export default FeedbackStats
