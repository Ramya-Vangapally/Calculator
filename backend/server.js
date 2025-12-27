const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Calculator backend running 🚀");
});

app.post("/calculate", (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) return res.status(400).json({ error: "Divide by zero" });
      result = num1 / num2;
      break;
    default:
      return res.status(400).json({ error: "Invalid operator" });
  }

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
