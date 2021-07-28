const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const post = {};
app.get("/posts", (req, res) => {
  res.status(200).send(post);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  post[id] = {
    id,
    title,
  };
  res.status(201).send(post[id]);
});

app.listen(4000, () => console.log("Listening on port 4000"));
