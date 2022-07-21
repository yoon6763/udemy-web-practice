const express = require("express");

const app = express();

app.get("/", function(request, response) {
    response.send("<hl>Hello, World!</hl>")
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: yoon6763@naver.com")
});

app.get("/about",function(req,res) {
    res.send("My name is yoonho~")
});

app.get("/hobbies", function(req,res) {
    res.send("<ul><li>Coffee</li><li>Code</li></ul>")
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});