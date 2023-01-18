const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
let items = [];

let today = new Date();
let day = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long"
});

app.get("/", function (req, res) {

    res.render("list", {
        kindOfDay: day,
        listItems: items
    });

});

app.post("/", function (req, res) {
    items.push(req.body["newItem"]);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
