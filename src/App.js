import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import data from './data/data'
import './index.css'

function App() {
    const [feedback, setFeedback] = useState(data)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure want to delete?')) {
            setFeedback((prev) => prev.filter((el) => el.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                {feedback.length !== 0 && <FeedbackStats feedback={feedback} />}
                <FeedbackList
                    feedback={feedback}
                    onDeleteFeedback={deleteFeedback}
                />
            </div>
        </>
    )
}

export default App
