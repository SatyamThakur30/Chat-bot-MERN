const express = require("express");

const getResponse = require("../functions/dialogflow_function");
const { protect } = require("../middleware/authmiddleware");
const router = express.Router();

const FAQ = require("../models/faq");

router.get("/", (req, res) => {
  res.send({ message: "working.." });
});

router.post("/query", protect, async (req, res) => {
  const { text } = req.body;
  const response = await getResponse(text);
  console.log(req.user);
  if (response === "I didn't get that.") {
    let faq = await FAQ.create({
      user: req.user,
      query: text,
    });
    console.log(faq);
    if (faq) {
      res.send(response + "your query is sent customer care executive ");
    } else {
      res.send("something went wrong");
    }
  } else {
    res.send(response);
  }
});

router.get("/all_faq", async (req, res) => {
  let faqs = await FAQ.find({});
  if (faqs) {
    res.send({ faqs });
  } else {
    res.send({});
  }
});

module.exports = router;
