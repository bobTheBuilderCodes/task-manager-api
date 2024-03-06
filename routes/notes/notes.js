const express = require('express')

const notesRouter = express.Router()

notesRouter.get("/", (req, res)=>{
    res.send("These are all the notes available in the system")
})

notesRouter.get("/:id", (req, res)=>{
    res.json({message: `Not with it ${req.params.id} fetched successfully`})
})

module.exports = notesRouter