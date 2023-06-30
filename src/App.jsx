import { useState } from 'react'
import './App.scss'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card></Card>
    </>
  )
}

export default App
