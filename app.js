require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5000 || process.env.PORT;

const connectDB = require("./db/connectDB");
const ejsLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes/Wellpaid");

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static
app.use(express.static(path.join(__dirname, "./public")));


// set ejs engine
app.use(ejsLayouts);
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.send("Hello world");
})
app.use("/api/v1", routes);



// routes



connectDB(process.env.MONGO_URI);
app.listen(PORT, (req, res) => {
    console.log(`App is listning on port ${PORT}`)
})