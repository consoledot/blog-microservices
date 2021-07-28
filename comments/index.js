const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("crypto");
const app = express();
app.use(bodyParser.json());
const comments = {};

app.get("/post/:id/comments", (req, res) => {});

app.post("/post/:id/comments", (req, res) => {});

app.listen(4001, () => console.log("listening on port 5000"));
