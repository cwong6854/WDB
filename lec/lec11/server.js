// npm install express --save

//import express
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

// routers --> backend routers 
const router = express.Router();

// two utility functions
app.use(express.json()); // Utility for request bodies (get data)
app.use(express.urlencoded({ extended: true })); // Utilities for query params 

// Server setup

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app is listening at http://localhost:${port}`)
});

app.get("/", (req, res) => {
    res.send("Hello World");
})

// MongoDB setup for Mac
// 1.) brew tap mongodb/brew
// 2.) brew install mongodb-community
// 3.) brew services start mongodb-community

// mongo

// use database-intro

// control-c

// npm install mongoose --save


const mongoose = require('mongoose');
// mongodb database link
const url = "mongodb://127.0.0.1:27017/database-intro";
// 

mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', _ => {
    console.log('Database connected:', url);
})

db.on('error', err => {
    console.error('connection error', err)
})

// Create our first model (instance of a model is called a document)
// Step 1: create a schema: A schema is a JSON object that defines the structure and contents of your data

const Schema = mongoose.Schema;

const item = new Schema({
    title: String,
    task: String,
    date: String,
    urgency: Number,
})

// 1 is not that urgent, but 3 is urgent

const TODO = mongoose.model("TODO", item);

// CURD Operations for MongoDB & Express (create, update, read, delete)

router.post("/db", (req, res) => {
    const todo = new TODO({
        title: req.body.title,
        task: req.body.task,
        date: req.body.date,
        urgency: req.body.urgency,
    })
    todo.save((error, document) => {
        if (error) {
            res.json({ status: "failure"})
        } else {
            res.json({
                status: "success"
            });
        }
    });
})

// Retrieve

router.get("/db/all", (req, res) => {
    TODO.find().then((todos) => {
        res.json({ message: "Return all todos.", todos: todos})
    })
})

// Intro to routers

router.route("/db/:id")
.get((req, res) => {
    // get a certain item from the db
    TODO.findById(req.params.id, (error, todo) => {
        if (error) {
            res.json({ status: "failure"});
        } else {
            res.json(todo);
        }
    })
})

// Update

router.route("db/:id")
.get((req, res) => {
    // get a certain item from the db
    TODO.findById(req.params.id, (error, todo) => {
        if (error) {
            res.json({ status: "failure"});
        } else {
            res.json(todo);
        }
    })
})
.put((req, res) => {
    TODO.findByIdAndUpdate(req.params.id, req.body, (error, todo) => {
        if (error) {
            res.json({ status: "failure"});
        } else {
            res.json(todo);
        }
    })
})

// Delete

router.route("db/:id")
.get((req, res) => {
    // get a certain item from the db
    TODO.findById(req.params.id, (error, todo) => {
        if (error) {
            res.json({ status: "failure"});
        } else {
            res.json(todo);
        }
    })
})
.delete((req, res) => {
    TODO.findByIdAndDelete(req.params.id, req.body, (error, todo) => {
        if (error) {
            res.json({ status: "failure"});
        } else {
            res.json({ status: "success"});
        }
    })
})