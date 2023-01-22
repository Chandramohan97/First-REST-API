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

router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.json(newSubscriber);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
