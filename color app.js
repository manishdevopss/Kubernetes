const express = require("express");

const app = express();

const colors = ["red", "green", "yellow"];

app.get("/api/v1/colors", (req, res) => {
  res.json({
    version: "1.0.0",
    colors: colors
  });
});

app.listen(3000, () => {
  console.log("Color API running on port 3000");
});
