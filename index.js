const express = require("express");
const app = require("express")();
// require("dotenv").config();
const subscriberRouter = require("./router/subscribers");
const port = process.env.port || 8080;
// const bodyparser = require("body-parser");
// app.use(bodyparser.urlencoded({ extended: false }));

const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (req, res) => {
  res.json("Hello");
});

app.use("/subscriber", subscriberRouter);

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
