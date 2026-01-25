import React from "react";

function AddWorkoutButton() {
  function AddWorkout() {
    fetch("http://127.0.0.1:8000/addworkout?name=test&username=Sahil", {
      method: "POST",
    })
      .then((res) => res.json().catch(() => ({})))
      .then((data) => {
        console.log(data);
        // notify other components to refresh
        window.dispatchEvent(new Event("workouts-updated"));
      })
      .catch((err) => console.error("Add workout failed", err));
  }
  return <button onClick={AddWorkout}>Add Workout</button>;
}

export default AddWorkoutButton;
