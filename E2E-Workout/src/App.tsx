import { useState, useEffect } from 'react'
import './App.css'
import AddWorkoutButton  from './components/AddWorkout.tsx'
import LoginButton  from './components/LoginButton.tsx'
import WorkoutsList from './components/WorkoutsList.tsx'


function App() {
    // const [workouts, setWorkouts] = useState<[]>([]);
    // useEffect(() => {
    //     let mounted = true;

    //     (async () => {
    //         try {
    //             const response = await fetch("http://127.0.0.1:8000/workoutslist");
    //             const data = await response.json();
    //             if (!mounted) return;
    //             setWorkouts(data || []);
    //             console.log(data);
    //         } catch (error) {
    //             console.error("Error fetching: ", error);
    //         }
    //     })();

    //     return () => { mounted = false; };
    // }, []);
  return (
    <>
      <div className="card right">
        <h1>E2E Workout</h1>
        <LoginButton />
      </div>


      <div className="card left">
        <AddWorkoutButton />
        <WorkoutsList />
      </div>

    </>
  )
}

export default App
