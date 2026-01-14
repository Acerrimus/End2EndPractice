import sqlite3

# Starting and creating DB

conn = sqlite3.connect('workouts.db')

cursor = conn.cursor()

cursor.execute("DROP TABLE IF EXISTS WORKOUTS")

sql = '''CREATE TABLE WORKOUTS(
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Workout_name CHAR(20) NOT NULL,
    Created_At DATETIME DEFAULT CURRENT_TIMESTAMP,
    User_Id INT
)'''

cursor.execute(sql)
print("SQL EXECUTED")

conn.commit()
conn.close()

def AddWorkout():

    conn = sqlite3.connect('workouts.db')

    cursor = conn.cursor()

    sql = '''
    INSERT INTO WORKOUTS 
        values(null, 'TestOut',null, 1)
    '''

    conn.execute(sql)
    conn.commit()
    conn.close()

    print("Workout Added")

    return 0