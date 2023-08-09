///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config();

// pull PORT from .env
const { PORT = 4200 } = process.env;

// import express
const express = require("express");

// create express app object
const app = express();

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