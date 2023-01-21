const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
router.get("/:id", (req, res) => {});

module.exports = router;
