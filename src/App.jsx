import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import GuidePage from './components/GuidePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/guia-tips" element={<GuidePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
