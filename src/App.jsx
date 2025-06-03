import { useState } from 'react'
import './App.css'
import { registerUser, checkUsage } from './api'

function App() {
  const [username, setUsername] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [usage, setUsage] = useState(null)
  const [registerError, setRegisterError] = useState('')
  const [usageError, setUsageError] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    setRegisterError('')
    try {
      const data = await registerUser(username)
      setApiKey(data.apiKey)
    } catch {
      setRegisterError('Registration failed')
    }
  }

  const handleCheckUsage = async (e) => {
    e.preventDefault()
    setUsageError('')
    try {
      const data = await checkUsage(username)
      setUsage(data.usageCount)
    } catch {
      setUsageError('Usage check failed')
    }
  }

  return (
    <div className="container">
      <h1>Inference API Web Interface</h1>
      <form onSubmit={handleRegister} className="card">
        <h2>Register User</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        {apiKey && <div><b>API Key:</b> <code>{apiKey}</code></div>}
        {registerError && <div style={{color:'red'}}>{registerError}</div>}
      </form>
      <form onSubmit={handleCheckUsage} className="card">
        <h2>Check Usage</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <button type="submit">Check Usage</button>
        {usage !== null && <div><b>Usage Count:</b> {usage}</div>}
        {usageError && <div style={{color:'red'}}>{usageError}</div>}
      </form>
      <div className="card">
        <h2>API Key for CLI</h2>
        <p>Register to get your API key for CLI usage.</p>
        {apiKey && <div><b>Your API Key:</b> <code>{apiKey}</code></div>}
      </div>
    </div>
  )
}

export default App
