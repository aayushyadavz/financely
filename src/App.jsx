import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignInSignUp from './components/SignInSignUp'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'

function App() {

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<SignInSignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
