import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, onDeleteFeedback }) {
    if (!feedback || feedback.length === 0)
        return <h3 className="msg">No Feedback Yet</h3>

    return (
        <ul>
            <AnimatePresence>
            {feedback.map((el) => (
                <motion.div
                    key={el.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
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
