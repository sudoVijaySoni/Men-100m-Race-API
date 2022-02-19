const express = require("express");
const app = express();
const router = require("./routers/men.js")
const port = process.env.PORT || 3000;
require("../src/db/conn.js");
const MensRanking = require("../src/models/mens.js");
app.use(express.json());
app.use(router)

app.get("/",(req,res)=>{
    res.send("Welcome");
})


app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:3000`);
})