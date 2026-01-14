import sqlite3

def connect():
    conn = sqlite3.connect('workouts.db')
    cursor = conn.cursor()

def CreateTable():

    # Starting and creating DB

    conn = sqlite3.connect('workouts.db')

    cursor = conn.cursor()

    cursor.execute("DROP TABLE IF EXISTS WORKOUTS")

    # sql = '''CREATE TABLE WORKOUTS(
    #     Id INTEGER PRIMARY KEY AUTOINCREMENT,
    #     Workout_name CHAR(20) NOT NULL,
    #     Created_At DATETIME DEFAULT CURRENT_TIMESTAMP,
    #     User_Id INT
    # )'''

    sql = '''CREATE TABLE WORKOUTS(
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Workout_name CHAR(20) NOT NULL,
    Created_At DATETIME DEFAULT INT,
    User_Id CHAR(20) UNIQUE
    )'''

    cursor.execute(sql)
    print("SQL EXECUTED")

    conn.commit()
    conn.close()


def AddWorkoutDefault():

    conn = sqlite3.connect('workouts.db')

    cursor = conn.cursor()

    sql = '''
    INSERT INTO WORKOUTS 
        values(null, 'TestNow',null, 1)
    '''

    conn.execute(sql)
    conn.commit()
    conn.close()

    print("Workout Added")

    return 0

def AddWorkout(name, username, datetime):
    conn = sqlite3.connect('workouts.db')
    cursor = conn.cursor()
    user_id = username
    sql = '''
    INSERT INTO WORKOUTS
        values(null,'{}','{}','{}');
    '''.format(name,datetime,user_id)
    cursor.execute(sql)
    conn.commit()
    conn.close()
    print("Attempted")