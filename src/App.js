import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import data from './data/data'
import './index.css'

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <h1>My App</h1>
                {data.length === 0 ? (
                    <h3>No Feedback Yet</h3>
                ) : (
                    <FeedbackList data={data} />
                )}
            </div>
        </>
    )
}

export default App
