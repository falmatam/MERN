const express = require("express");

const app = express(); //init express server to app
const port = 8000;
//Route
app.get("/", (req, res) => {
    res.send("<h2>Welcome to Home page</h2>")
    //res.send("Welcome to Home page");
});

//Another Route
app.get("/about", (req, res) => {
    res.send("<h2>Welcome to About page</h2>")
    //res.send("Welcome to Home page");
});

//by default knows 'localhost'
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 