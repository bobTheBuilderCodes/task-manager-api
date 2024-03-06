
const express = require("express");
const tasksRouter = require("./routes/tasks/tasks");
const notesRouter = require("./routes/notes/notes");
const connectToDB = require("./db/connect");
require("dotenv").config()

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use("/api/v1/tasks", tasksRouter);
app.use("/api/v1/notes", notesRouter);

app.get("/", (req, res) => {
  res.send("Hello, World");
});


async function startServer(){
    try {
        console.log("Connecting to DB....")
        await connectToDB(process.env.MONGODB_URI)
        app.listen(PORT, console.log(`Server connected at port ${PORT}`))
        console.log(`Connection to DB successful.`)
        
    } catch (error) {
        console.log(error)

    }
}

startServer()

// app.listen(PORT, console.log(`Server connected at port ${PORT}`))


