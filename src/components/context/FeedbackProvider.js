import { createContext, useState } from 'react'
import nanoId from 'nano-id'

const FeedbackContext = createContext()

export const FeebdackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: '1', text: 'This is the text', rating: 5 },
  ])

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      setFeedback((prev) => prev.filter((el) => el.id !== id))
    }
  }

  const addFeedback = (text, rating) => {
    const newFeedback = {
      id: nanoId(),
      rating,
      text,
    }
    setFeedback((prevState) => [newFeedback, ...prevState])
  }

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
