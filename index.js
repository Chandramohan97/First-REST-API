const app = require("express")();
require("dotenv").config();
const subscriberRouter = require("./router/subscriber");
const port = process.env.port || 8080;
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL);

// const db = mongoose.connections;
// console.log(db);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/subscriber", subscriberRouter);

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
