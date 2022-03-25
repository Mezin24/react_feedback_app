import React, { useState } from 'react'
import Button from './UI/Button'
import Card from './UI/Card'

function FeedbackForm() {
    const [textInput, setTextInput] = useState('')

    const changeHandler = (event) => setTextInput(event.target.value)

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
                    <Button isDisabled={textInput.length < 10}>Send</Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
