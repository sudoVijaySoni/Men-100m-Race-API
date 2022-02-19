const mongoose = require('mongoose');   
const DB_URI = "your Mongo Atlas URI here" // fetch from .env
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connection to Mongo DB Done")
})
.catch((err)=>{
    console.log("Errr to db is " +  db)
})



