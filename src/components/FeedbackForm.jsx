import React, { useState } from 'react'
import Button from './UI/Button'
import Card from './UI/Card'

function FeedbackForm() {
    const [textInput, setTextInput] = useState('')
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

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Enter your text"
                        value={textInput}
                        onChange={changeHandler}
                    />
                    <Button isDisabled={isDisabled}>Send</Button>
                </div>
                {message && <p className="message">{message}</p>}
            </form>
        </Card>
    )
}

export default FeedbackForm
