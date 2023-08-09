///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config();

// get PORT, DATABASE_URL from .env
const { PORT = 4200, DATABASE_URL} = process.env;

// import express
const express = require("express");

// create express app object
const app = express();

// import mongoose
const mongoose = require("mongoose");

// import cors
const cors = require("cors");

// import morgan
const morgan = require("morgan");


////////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// establish connection
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
});

// connection events
mongoose.connection
    .on("open", () => console.log("Connected to mongoose"))
    .on("close", () => console.log("Disconnected from mongoose"))
    .on("error", (error) => console.log(error));


///////////////////////////////
// MODELS
////////////////////////////////
const cheeseSchema = new mongoose.Schema({
    name: String, 
    image: String,
    title: String
});

const Cheese = mongoose.model("Cheese", cheeseSchema);



///////////////////////////////
// MIDDLEWARE
///////////////////////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());



///////////////////////////////
// ROUTES
////////////////////////////////
// test route
app.get("/", (req, res) => {
  res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));