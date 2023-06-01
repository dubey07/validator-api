const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const validate = require("validate");
require("dotenv").config();
const port = process.env.PORT || 4000

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())



const route = require("./routes/route");

app.use("/api/v1", route);

const dbConnect = require("./config/database");
dbConnect();
app.listen(port, ()=>{
    console.log(`App is running successfully at ${port}`)
})

app.get("/", (req,res)=>{
    res.send(`<h1>This is HomePage</h1>`);
});