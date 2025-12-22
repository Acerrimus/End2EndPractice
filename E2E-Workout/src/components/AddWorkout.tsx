function AddWorkoutButton() {
  function handleClick() {
    fetch("http://127.0.0.1:8000/workout?name=Pushups&username=sahil", {
      method: "PUT"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  return <button onClick={handleClick}>Add workout</button>;
}

export default AddWorkoutButton