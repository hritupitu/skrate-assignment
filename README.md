# Skrate BackEnd Assignment - Hritvik Agarwal

A backend server for fetching APIs. It includes the express server code along with MongoDB connection using mongoose.


# Deployment URL

The server is deployed on Replit on this URL: [Deployment URL](https://skrate-assignment.hritupitu.repl.co/)

In case the URL is down, it is because replit has decided to stop the server, in which case access [this link](https://replit.com/@hritupitu/skrate-assignment) and click run. 

P.S. I was planning to deploy it on Heroku but it turns out I am out of free dynos but Replit should work just fine, if not better :)

# Postman Collection

The Postman Collection includes examples on how to make the API calls to the server and also examples on what to expect for output.

[Click Here to access the Postman Collection](https://www.postman.com/warped-meadow-507933/workspace/skrate-backend-assignment/collection/14397817-c6145021-8b01-4099-9290-0f967ac61076)

# How to run

If you decide to test this on your local machine, run:

    $ git clone https://github.com/hritupitu/skrate-assignment.git
    $ cd skrate-assignment
    $ npm install
    $ npm start
Alternatively, you can also run:

    $ npm run dev
The difference here is that I use nodemon for dev purposes and if you decide to make changes to the files, it will be greatly helpful.

# API Calls

## Add Users
To add users, you can make a **POST** request to http://skrate-assignment.hritupitu.repl.co/users/new and pass the body 
```js
{username: "Hritvik"}
```
At the end of this request, you can expect a string which will indicate said user's UID

## Get all Users

To access all users, you can make a **GET** request to http://skrate-assignment.hritupitu.repl.co/users/all

An example return value for this request is:

```js
[{
	"_id":  "61bc59d80947bedeee73d1b0",
	"username":  "Hritvik"
},
{
	"_id":  "61bc59e60947bedeee73d1b3",
	"username":  "Vedant"
}
}]
```

## Create a Meeting

To create a meeting, you can make a **POST** request to http://skrate-assignment.hritupitu.repl.co/meetings/new and pass the body 
```js
{
	uid1: "61bc59d80947bedeee73d1b0",
	uid2: "61bc59e60947bedeee73d1b3"
}
```

At the end of this request, you can expect a string which will indicate the created meeting's UID

## Get all Meetings along with user details

To access all meetings, you can make a **GET** request to http://skrate-assignment.hritupitu.repl.co/meetings/all

An example return value for this request is:

```js
[{
	"_id":  "61bc66c7f27eb9c6c15b2451",
	"uid1":  {
		"_id":  "61bc59d80947bedeee73d1b0",
		"username":  "Hritvik"
},
	"uid2":  {
		"_id":  "61bc59e60947bedeee73d1b3",
		"username":  "Vedant"
},
	"date":  "2021-12-17T10:30:31.252Z"
}]
```
This JSON will consist of `_id` which holds the meeting id along with elements `uid1` which will hold details of the first user in the meeting (their UID and Name) and `uid2` which will hold the same values for the second user. It will also have an element `date` which will hold the Date and Time of the meeting creation.

# Secrets

Currently, the only secret set up for this project is the `DB_URI` secret which is set up on the replit.
In case it becomes unavailable for use on your computer, you can add it again with 

    KEY: DB_URI
    VALUE: mongodb+srv://hritvik:TJ8nAsLjjRm25u1T@skrate-assignment.ioawu.mongodb.net/skrate-assignment?retryWrites=true&w=majority

I understand that it is a huge security flaw to list out the secret key on a public repo and I do not plan to do this during production 😀

## Current Security Flaws

 - Currently the `DB_URI` is written in the [README](https://github.com/hritupitu/skrate-assignment/blob/master/README.md)
 - The IP whitelist for database access is set to everyone
 - No authentication APIs set up to mitigate said issues

## External Libraries

    nodemon - for ease of development
    mongodb - for database
    mongoose - for MongoDB support
    express - For server
    dotenv - To load environment objects into server
    
