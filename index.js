const express = require("express");
const bodyParser = require("body-parser");
const { log } = require("console");
const app = express();
const path = require('path');
let loginCheck = false;


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    if (loginCheck === false)
        res.sendFile(__dirname + "/login.html");
    else
        res.sendFile(__dirname + "/index.html");
});

app.get("/logout",(req,res)=>{
    loginCheck = false;
    res.redirect("/");
});

app.post("/", (req, res) => {
    const user = req.body["username"];
    const pass = req.body["password"];
    
    if (user === "devi_05" && pass === "devi_05") {
        loginCheck = true;
        res.sendFile(__dirname + "/index.html");
    } else {
        res.sendFile(__dirname + "/login.html");
    }
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
