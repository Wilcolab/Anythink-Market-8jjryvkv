import express from "express";

const app = express();
app.use(express.json());

let tasks = [];

app.get("/", (req, res) => {
  res.send("Node server running");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  if (!req.body.text) return res.status(400).json({ error: "Missing text" });
  tasks.push(req.body.text);
  res.json(tasks);
});

app.listen(3000, () => console.log("Node on 3000"));
