import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Acc from './Components/Accordion/Acc'
import Randomcol from './Components/RandomCol/Randomcol'
import StarRating from './Components/StarRating/StarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Acc/>
        <Randomcol/>
        <StarRating noOfStars={10}/>
      </div>
     
  )
}

export default App
