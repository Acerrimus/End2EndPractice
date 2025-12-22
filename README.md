# End2EndPractice
Setting up a whole web app end to end for solidifying my fundamentals, shoutout to Jonas.


### Here is the challenge:

Build a basic web-app and deploy it to the public internet

using a web-frontend of your choice, implement the following user stories (simple workout tracker):

1. User can input a username
2. User can add workouts (add button, dialog with input/ok/cancel buttons) -> workout appears on list
3. Workouts appear ina  list, sorted by when they were created (newest first)
4. user can click a workout in th elist to send it to the bottom of the list


Build a backend with an API using a language of your choice.
- Endpoint PUT /workout wich accepts: {name: string ;username: string}
- Endpoint DELETE /workout (same body, deletes workout from list)
- Endpoint PUT /pop-workout (same body, moves workout to the bottom of the list)

Choose an sql database that persists these workout lists

Dockerise your frontend and backend
deploy them to a cloud service like heroku.




### My approach journal

Day 1:

Here I will log my thinking processes, progress, any interesting things I learn, etc. This will be interesting to read back over once I'm a more advanced developer, or maybe for others on a similair path.

First things first, manually writing out what I have to do forced me to load up the whole image of waht were doing in my RAM,

I have a vague Idea of waht I can do, and what I cant do right now, which tells me what I will have to learn and research.

To actually get started I have to decide what stack I'm going to use. Last time I used react for my frontend, and have no clue what I did anywhere else.

This time I will have a quick overview of tech stacks, 10m max, and make a quick informed decision on what is best for me. I might just decide to use the same tech stack as my other archived remindrr project.


AI will be allowed to answer very specific questions in this challenge, but it will not be allowed to write any code, or do any thinking or decision making for me. It is only allowed to provide me with information. 

I think I'll stick to React for my frontend, and node.js for my backend, its the industry standard it seems, and I could probably benefit from having a better understanding of the most popular tools out there.

I'm noticing when deciding on a stack scaling is a big concern, this is not vital for me as I'm only practicing understanding how the whole picture fits together, but I think its worthwhile for me to understand how scaling will work in future, particularly horizontal vs vertical scaling.

The more I look into stacks, the more terms I come accross, now I feel the need to understand what being ACID compliant means.

Just watched firebase's video on tech stacks, and it only left me more lost than I started with.

I guess I'll stick to using React up front, mySQL for the databse to get that practice in, and then either Djando or NOde.js for my backend, I'll figure that one out later, cause I still kinda have no clue waht either of them do.

Infact, lets google it. 

Okay, lets start actualy writing code.

Let's create our backend, which I will write in python for ease and speed sake, although I do also want to learn typescript, hmmm... I guess my next task can be to rewirte all this in typescript. Yeah.

The lastest way to get started though is to just npm create@latest, and then get it to create a react app for me and edit from there on, but am I really learning this way? Fuck it, lets just create and then decide later.


Great, now we have a shell I can edit and take apart to understnad how things work. I have a React frontend that works, but I have no state, no DB, and no API as far as I know. I don't even fully understand what I'm saying.

Let's just give it a title and take our first brake so I can digest what I'm doing and come back with clarity. Also push these changes.


Day 1.5
Alright, were back at it at night, and this time after spending time hopelessly trying to figure out a workflow I decided to ask chatgpt to guide me without givign me massive clues, and I somehow ended up listening to it mindlessly to get me started and give me a footing, in this case, I have now created a super quick and simple backedn using FastAPi and uvicorn, I am now getting the hang of requests, decorators,a nd handlers/routing I think.

I now understand what a REST API is more clearly now, as well as the fact taht it is only one type of API, there are also others like SOAP and GraphQL. REST API uses the HTTP protocol, which includes standard methods such as GET, POST, PUT, DELETE. All the data is then represented in json format.

POST adds data,
GET retreives data
PUT updates existing data
DELETE, well... deletes existing data


I understand hte backend enough to play with it now, the next thing I need to figure out is how to create a button that then triggers a HTTP request being sent to my API.
w
In my case, in React specifically, cause just doing onclick didnt work, or atleast idk the syntax for making it work like that. 

I had ChatGPT code me the button component for me, since I didnt remember the syntax, that may have been lalziness. now I need to understand how to connect this React app to my python API, which probably is much simpler than I think, as they can just commuincate to each other over the url I believe. 

But I'll do that tomorrow. It's almost 2AM, and I feel satisfied, and this post rock is really hitting hard rn.


