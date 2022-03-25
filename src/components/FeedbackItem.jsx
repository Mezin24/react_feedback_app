import React, { useContext } from 'react'
import FeedbackContext from './context/FeedbackProvider'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Card from './UI/Card'

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext)
  return (
    <li>
      <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <AiOutlineCloseCircle size={20} color="purple" />
        </button>
      </Card>
    </li>
  )
}

export default FeedbackItem
