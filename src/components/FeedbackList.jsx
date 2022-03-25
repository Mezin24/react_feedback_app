import React, { useContext } from 'react'
import FeedbackContext from './context/FeedbackProvider'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ onDeleteFeedback }) {
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0)
    return <h3 className="msg">No Feedback Yet</h3>

  return (
    <ul>
      <AnimatePresence>
        {feedback.map((el) => (
          <motion.div
            key={el.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              item={el}
              key={el.id}
              onDeleteFeedback={onDeleteFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default FeedbackList
