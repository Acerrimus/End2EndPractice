import { useState } from 'react'
import './App.css'
import AddWorkoutButton  from './components/AddWorkout.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>E2E Workout</h1>
      <div className="card">
        <AddWorkoutButton />
        <p>
          Cunt
        </p>
        
      </div>

    </>
  )
}

export default App
