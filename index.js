require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "hello world" });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
