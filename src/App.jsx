import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Acc from './Components/Accordion/Acc'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Acc/>
        {/* Accordion */}
       
      </div>
     
  )
}

export default App
