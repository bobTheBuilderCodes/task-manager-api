const mongoose = require("mongoose")


function connectToDB(url){
    return mongoose.connect(url)
}

module.exports = connectToDB



// const connectionString = "mongodb+srv://bob:SUyHNsJbkQOeoXBl@notes-app.iqrgc84.mongodb.net/?retryWrites=true&w=majority&appName=notes-app"
// mongoose.connect(connectionString).then(()=>{
//     console.log("Connected to DB...")
// }).catch((error)=> console.log(error))