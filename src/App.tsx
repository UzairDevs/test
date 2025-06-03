import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Silver from './components/Silver'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        HEllo pusing stiff to gtihub
      </div>
      <Silver />
    </>
  )
}

export default App
