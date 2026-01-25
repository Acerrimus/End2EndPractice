from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from datetime import datetime

from db import *

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
    return{"status": "Sahil is goated"}

@app.get("/cunt")
def root2():
    return{"status 2": "cunt"}

workouts = []

@app.get("/addworkoutdef")
def add_workout_default():
    try:
        AddWorkoutDefault()
        print("Default added SUCCESSFULLY")
    except Exception as e:
        print("Errir adding workout:", e)
    
    return{"Workout" : "ADDED DEFAULT"}
    

@app.post("/addworkout")
def add_workout(name: str, username: str):
    # datetime = datetime.now().isoformat(timespec='minutes')
    datetime = 1
    print("stage1")
    try:
        AddWorkout(name, username, datetime)
        print("Workout added successfully")
    except Exception as e:
        print("Error adding workout:", e)

    return(workouts)


@app.get("/workoutslist")
# TODO: Return a dictionoary instead of a list
def list_workouts():
    return(ListWorkouts())


@app.get("/clear")
def clear_table():
    CreateTable()
    return
