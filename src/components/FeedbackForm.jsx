import React, { useState, useContext, useEffect } from 'react'
import nanoId from 'nano-id'
import FeedbackContext from './context/FeedbackProvider'
import FeedbackRating from './FeedbackRating'
import Button from './UI/Button'
import Card from './UI/Card'

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [isDisabled, setIsDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const changeHandler = (event) => {
    const input = event.target.value
    if (input === '') {
      setIsDisabled(true)
      setMessage(null)
    } else if (input !== '' && input.trim().length < 10) {
      setIsDisabled(true)
      setMessage('You should write at least 10 characters')
    } else {
      setMessage(null)
      setIsDisabled(false)
    }
    setText(event.target.value)
  }

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newFeedback = {
      id: nanoId(),
      rating,
      text,
    }

    if (text.trim().length > 10) {
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setText('')
      setRating(10)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <FeedbackRating rating={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your text"
            value={text}
            onChange={changeHandler}
          />
          <Button isDisabled={isDisabled} type="submit">
            Send
          </Button>
        </div>
        {message && <p className="message">{message}</p>}
      </form>
    </Card>
  )
}

export default FeedbackForm
