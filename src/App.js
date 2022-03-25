import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import data from './data/data'
import './index.css'

function App() {
    const [feedback, setFeedback] = useState(data)

    const deleteFeedback = (id) => {
        setFeedback((prev) => prev.filter((el) => el.id !== id))
    }

    return (
        <>
            <Header />
            <div className="container">
                {feedback.length === 0 ? (
                    <h3 className="msg">No Feedback Yet</h3>
                ) : (
                    <FeedbackList
                        data={feedback}
                        onDeleteFeedback={deleteFeedback}
                    />
                )}
            </div>
        </>
    )
}

export default App
