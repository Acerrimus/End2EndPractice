function LoginButton() {
  function LoginAttempt() {
    fetch("http://127.0.0.1:8000/addworkout?name=login&username=Sahil", {
      method: "POST",
    })
      .then(() => {
        // notify list to refresh after login-add
        window.dispatchEvent(new Event("workouts-updated"));
      })
      .catch((err) => console.error("Login add failed", err));
  }
  return (
    <button id="Login" onClick={LoginAttempt}>
      Login as Sahil
    </button>
  );
}

export default LoginButton;
