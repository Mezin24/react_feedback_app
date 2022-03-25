import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeebdackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: '1', text: 'This is the text', rating: 5 },
  ])

  return (
    <FeedbackContext.Provider value={{ feedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
