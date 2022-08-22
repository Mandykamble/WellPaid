const mongoose = require("mongoose");

const connectDB = (url) => {
    mongoose.connect(url);
    console.log("DB connected");
}

module.exports = connectDB;