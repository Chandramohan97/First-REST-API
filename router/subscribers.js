const express = require("express");
const router = require("express").Router();
const mongoose = require("mongoose");
const Subscriber = require("../model/subscriber");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const subscriber = await Subscriber.find();
    res.send(subscriber);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", getSubscriber, (req, res) => {
  res.send(res.subscriber.name);
});

router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.send(subscriber);
  } catch (err) {
    res.send(err);
  }
});

async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.parms.id);
    if (subscriber == null) {
      return res.send("Cannot find subscriber");
    }
  } catch (err) {
    return res.send(err);
  }

  res.subscriber = subscriber;
  next();
}

module.exports = router;
