const express = require("express");
const router = express.Router();

const { home } = require("../controllers/wellpaid");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())




router.route("/home").get();

module.exports = router;