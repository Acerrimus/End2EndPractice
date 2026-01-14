from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from db import AddWorkout

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

AddWorkout()