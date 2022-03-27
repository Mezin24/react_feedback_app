import { createContext, useState } from 'react'
import data from '../../data/data'

const FeedbackContext = createContext()

export const FeebdackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(data)
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      setFeedback((prev) => prev.filter((el) => el.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    setFeedback((prevState) => [newFeedback, ...prevState])
  }

  const editFeedback = (id) => {
    setFeedbackEdit({
      item: feedback.find((el) => el.id === id),
      edit: true,
    })
  }

  const updateFeedback = (id, updFeedback) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...updFeedback } : item))
    )
    setFeedbackEdit({ item: {}, edit: false })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
