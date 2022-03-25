import nanoId from 'nano-id'
import React, { useState } from 'react'
import FeedbackRating from './FeedbackRating'
import Button from './UI/Button'
import Card from './UI/Card'

function FeedbackForm({onAddFeedback}) {
    const [textInput, setTextInput] = useState('')
    const [ratingInput, setRatingInput] = useState(10)
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
        setTextInput(event.target.value)
    }


    const changeRating = (value) => {
        setRatingInput(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        onAddFeedback(textInput, ratingInput)
        setTextInput('')
        setRatingInput(10)
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <FeedbackRating onChangerating={changeRating} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Enter your text"
                        value={textInput}
                        onChange={changeHandler}
                    />
                    <Button isDisabled={isDisabled} type='submit'>Send</Button>
                </div>
                {message && <p className="message">{message}</p>}
            </form>
        </Card>
    )
}

export default FeedbackForm
