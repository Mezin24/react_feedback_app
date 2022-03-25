import { FeebdackProvider } from './components/context/FeedbackProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import AboutLink from './components/AboutLink'
import './index.css'

function App() {
  return (
    <FeebdackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" exact element={<About />} />
          </Routes>
        </div>
        <AboutLink />
      </Router>
    </FeebdackProvider>
  )
}

export default App
