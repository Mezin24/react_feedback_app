import React, { useContext } from 'react'
import FeedbackContext from './context/FeedbackProvider'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './UI/Card'

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <li>
      <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes size={15} color="purple" />
        </button>
        <button className="edit" onClick={() => editFeedback(item.id)}>
          <FaEdit size={15} color="purple" />
        </button>
      </Card>
    </li>
  )
}

export default FeedbackItem
