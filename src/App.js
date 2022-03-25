import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import nanoId from 'nano-id'
import Header from './components/Header'
import About from './pages/About'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import AboutLink from './components/AboutLink'
import data from './data/data'
import './index.css'

function App() {
  const [feedback, setFeedback] = useState(data)

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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <FeedbackForm onAddFeedback={addFeedback} />
                {feedback.length !== 0 && <FeedbackStats feedback={feedback} />}
                <FeedbackList
                  feedback={feedback}
                  onDeleteFeedback={deleteFeedback}
                />
              </>
            }
          />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </div>
      <AboutLink />
    </Router>
  )
}

export default App
