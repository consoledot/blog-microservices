const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const post = {};
app.get("/posts", (req, res) => {
  res.status(200).send(post);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  post[id] = {
    id,
    title,
  };
  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: { id, title },
  });
  res.status(201).send(post[id]);
});

app.post("/events", (req, res) => {
  console.log("Received", req.body.type);
  res.send({});
});
app.listen(4000, () => {
  console.log("v10");
  console.log("Listening on port 4000");
});
