from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return{"status": "alive"}

@app.get("/cunt")
def root2():
    return{"status 2": "cunt"}

workouts = []

@app.put("/workout")
def add_workout(name: str, username: str):
    workout = {
        "name": name,
        "username": username
    }
    workouts.append(workout)
    return(workouts)