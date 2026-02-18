import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// NOTE: Tasks are stored in memory and will be lost when the server restarts.
// This implementation is not suitable for production use. Consider implementing
// persistent storage (e.g., database) for production deployments.
const tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/tasks", (req, res) => {
  const { text } = req.body || {};

  if (typeof text !== "string" || text.trim().length === 0) {
    return res.status(400).json({ message: "Task text is required" });
  }

  tasks.push(text);
  return res.json({ message: "Task added successfully" });
});

app.get("/tasks", (req, res) => {
  res.json({ tasks });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
