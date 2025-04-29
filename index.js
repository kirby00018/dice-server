const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let color = "red";
let result = "";

app.get("/get-color", (req, res) => {
  res.json({ color });
});

app.post("/set-color", (req, res) => {
  color = req.body.color;
  res.json({ status: "Color set successfully" });
});

app.get("/get-dice-result", (req, res) => {
  res.json({ result });
});

app.post("/set-dice-result", (req, res) => {
  result = req.body.result;
  res.json({ status: "Dice result set successfully" });
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
