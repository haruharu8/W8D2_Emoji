import { useState } from 'react'
import './App.css'
import Emojis from './component/Emojis'
import Compliment from './component/ComplimentButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MoodProvider>
        <Emojis />
        <Compliment />
      </MoodProvider>
    </>
  )
}

export default App
